import { createContext, useContext, useState, useEffect } from 'react';
import { authAPI } from '../services/api';
import analyticsClient from '../services/analyticsClient';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Check if user is logged in on mount
    useEffect(() => {
        const checkAuth = async () => {
            const token = localStorage.getItem('cdc_token');
            const savedUser = localStorage.getItem('cdc_user');

            if (token && savedUser) {
                try {
                    const response = await authAPI.getCurrentUser();
                    setUser(response.data.data.user);
                    setIsAuthenticated(true);

                    // Start analytics tracking
                    analyticsClient.startTracking();
                } catch (error) {
                    // Token invalid, clear storage
                    localStorage.removeItem('cdc_token');
                    localStorage.removeItem('cdc_refresh_token');
                    localStorage.removeItem('cdc_user');
                    setIsAuthenticated(false);
                }
            }

            setLoading(false);
        };

        checkAuth();
    }, []);

    const login = async (email, password) => {
        try {
            const response = await authAPI.login({ email, password });
            const { user, token, refreshToken } = response.data.data;

            localStorage.setItem('cdc_token', token);
            localStorage.setItem('cdc_refresh_token', refreshToken);
            localStorage.setItem('cdc_user', JSON.stringify(user));

            setUser(user);
            setIsAuthenticated(true);

            // Start analytics tracking
            analyticsClient.startTracking();

            return { success: true };
        } catch (error) {
            return {
                success: false,
                message: error.response?.data?.message || 'Login failed'
            };
        }
    };

    const register = async (data) => {
        try {
            const response = await authAPI.register(data);
            return { success: true, data: response.data };
        } catch (error) {
            return {
                success: false,
                message: error.response?.data?.message || 'Registration failed',
                errors: error.response?.data?.errors
            };
        }
    };

    const logout = async () => {
        try {
            // End analytics session
            await analyticsClient.endSession();

            // Call logout endpoint
            await authAPI.logout();
        } catch (error) {
            console.error('Logout error:', error);
        } finally {
            // Clear local storage
            localStorage.removeItem('cdc_token');
            localStorage.removeItem('cdc_refresh_token');
            localStorage.removeItem('cdc_user');

            setUser(null);
            setIsAuthenticated(false);
        }
    };

    return (
        <AuthContext.Provider value={{
            user,
            loading,
            isAuthenticated,
            login,
            register,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within AuthProvider');
    }
    return context;
};
