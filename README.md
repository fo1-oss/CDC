<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CDC Investor Data Room</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-auth-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore-compat.js"></script>
  <style>
    :root { --lime: #C0E529; --olive: #3D4A2B; }
    .btn-primary { background: var(--lime); border: 3px solid #000; }
    .card { border: 3px solid #000; border-radius: 1.5rem; }
  </style>
</head>
<body class="min-h-screen" style="background:#F5F3EB">
  <div id="app"></div>

  <script>
    // Firebase Config
    const firebaseConfig = {
      apiKey: "AIzaSyCyxLtijhq50ZTAQsy0P1GIInHtmstc88o",
      authDomain: "dataroom-dash.firebaseapp.com",
      projectId: "dataroom-dash",
      storageBucket: "dataroom-dash.firebasestorage.app",
      messagingSenderId: "492179105967",
      appId: "1:492179105967:web:e7c598fffbc342ac68cc5a"
    };

    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();
    const db = firebase.firestore();

    let currentUser = null;
    let userProfile = null;
    let sessionId = null;
    let sessionStart = null;
    let currentTab = 'overview';
    let tabStart = Date.now();

    // Track events
    async function trackEvent(type, extra = {}) {
      if (!currentUser || userProfile?.role === 'admin') return;
      try {
        await db.collection('analytics').add({
          type,
          userId: currentUser.uid,
          userEmail: currentUser.email,
          userName: userProfile?.name || currentUser.email,
          company: userProfile?.company || '',
          sessionId,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          ...extra
        });
      } catch (e) { console.error('Track error:', e); }
    }

    // Render functions
    function render(html) {
      document.getElementById('app').innerHTML = html;
    }

    function showLogin(error = '') {
      render(`
        <div class="min-h-screen flex">
          <div class="hidden lg:flex lg:w-1/2 p-12 flex-col justify-between" style="background:var(--olive)">
            <div class="text-white">
              <h1 class="text-4xl font-black">CREPDOG<br>CREW</h1>
              <div class="mt-4 inline-block px-4 py-2 rounded-lg text-sm font-bold" style="background:var(--lime);color:#000">INVESTOR DATA ROOM</div>
            </div>
            <div class="text-white space-y-4">
              <p class="text-white/70">✓ Real-Time Analytics</p>
              <p class="text-white/70">✓ Complete Documents</p>
              <p class="text-white/70">✓ Firebase Secured</p>
            </div>
            <p class="text-white/50 text-sm">© 2026 Crepdog Crew</p>
          </div>
          <div class="flex-1 flex items-center justify-center p-8">
            <div class="w-full max-w-md">
              <div class="card bg-white p-8">
                <h2 class="text-2xl font-black mb-2">Welcome Back</h2>
                <p class="text-gray-500 mb-6">Sign in to access the data room</p>
                ${error ? `<div class="bg-red-50 text-red-600 p-3 rounded-xl mb-4 text-sm border-2 border-red-200">${error}</div>` : ''}
                <div class="space-y-4">
                  <div>
                    <label class="block text-sm font-bold mb-2">Email</label>
                    <input type="email" id="email" class="w-full px-4 py-3 rounded-xl border-2 border-black" placeholder="you@company.com">
                  </div>
                  <div>
                    <label class="block text-sm font-bold mb-2">Password</label>
                    <input type="password" id="password" class="w-full px-4 py-3 rounded-xl border-2 border-black" placeholder="Your password">
                  </div>
                  <button onclick="login()" class="btn-primary w-full py-4 rounded-xl font-bold text-lg">Sign In</button>
                </div>
                <div class="mt-6 text-center">
                  <p class="text-gray-500">No account? <button onclick="showSignup()" class="font-bold" style="color:var(--olive)">Request Access</button></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      `);
    }

    function showSignup(error = '') {
      render(`
        <div class="min-h-screen flex items-center justify-center p-8">
          <div class="w-full max-w-lg">
            <button onclick="showLogin()" class="flex items-center gap-2 mb-6 text-gray-600 hover:text-black">← Back to Login</button>
            <div class="card bg-white p-8">
              <h2 class="text-2xl font-black mb-2">Create Account</h2>
              <p class="text-gray-500 mb-6">Register for data room access</p>
              ${error ? `<div class="bg-red-50 text-red-600 p-3 rounded-xl mb-4 text-sm border-2 border-red-200">${error}</div>` : ''}
              <div class="space-y-4">
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-bold mb-2">Name *</label>
                    <input type="text" id="name" class="w-full px-4 py-3 rounded-xl border-2 border-black" placeholder="John Doe">
                  </div>
                  <div>
                    <label class="block text-sm font-bold mb-2">Company *</label>
                    <input type="text" id="company" class="w-full px-4 py-3 rounded-xl border-2 border-black" placeholder="Acme Capital">
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-bold mb-2">Email *</label>
                  <input type="email" id="signup-email" class="w-full px-4 py-3 rounded-xl border-2 border-black" placeholder="john@acme.com">
                </div>
                <div>
                  <label class="block text-sm font-bold mb-2">Phone</label>
                  <input type="tel" id="phone" class="w-full px-4 py-3 rounded-xl border-2 border-black" placeholder="+91 98765 43210">
                </div>
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-bold mb-2">Password *</label>
                    <input type="password" id="signup-password" class="w-full px-4 py-3 rounded-xl border-2 border-black" placeholder="Min 6 chars">
                  </div>
                  <div>
                    <label class="block text-sm font-bold mb-2">Confirm *</label>
                    <input type="password" id="confirm" class="w-full px-4 py-3 rounded-xl border-2 border-black" placeholder="Repeat">
                  </div>
                </div>
                <button onclick="signup()" class="btn-primary w-full py-4 rounded-xl font-bold text-lg">Create Account</button>
              </div>
            </div>
          </div>
        </div>
      `);
    }

    function showDataRoom() {
      const docs = [
        {name:'Investor Pitch Deck',url:'https://drive.google.com/drive/folders/19UHG6yW0zXjsK-bbSMxrN7Qmfxzxt4xG',icon:'📊'},
        {name:'MIS FY26',url:'https://drive.google.com/drive/folders/1bM7sVd6rP59sfDIckzfV4nXHrNOkMjhm',icon:'📈'},
        {name:'Financials FY24',url:'https://drive.google.com/drive/folders/1W5KzPuaOyhZvsTikFjlmPDxu5PuJ2XBy',icon:'💼'},
        {name:'Investor FAQ',url:'https://drive.google.com/drive/folders/1tEKigXvDH5w28onKJCXJZyRw608mdl8x',icon:'❓'},
      ];

      render(`
        <div class="min-h-screen">
          <div class="bg-black text-white px-6 py-4 flex items-center justify-between">
            <div><h1 class="font-black text-xl">CREPDOG CREW</h1><p class="text-white/60 text-sm">Investor Data Room</p></div>
            <div class="flex items-center gap-4">
              <div class="text-right"><p class="font-medium">${userProfile?.name || ''}</p><p class="text-white/60 text-sm">${userProfile?.company || ''}</p></div>
              <button onclick="logout()" class="p-2 rounded-lg hover:bg-white/10">🚪</button>
            </div>
          </div>
          <div class="bg-white px-6" style="border-bottom:3px solid #000">
            <div class="flex gap-1">
              ${['overview','financials','stores','documents'].map(t => `
                <button onclick="switchTab('${t}')" class="px-6 py-4 font-bold capitalize ${currentTab===t ? '' : 'text-gray-500'}" style="${currentTab===t ? 'background:var(--lime);border-bottom:4px solid #000;margin-bottom:-3px' : ''}">${t}</button>
              `).join('')}
            </div>
          </div>
          <div class="p-6 max-w-6xl mx-auto">
            ${currentTab === 'overview' ? `
              <h2 class="text-3xl font-black mb-6">Welcome, ${userProfile?.name?.split(' ')[0] || 'Investor'}! 👋</h2>
              <div class="grid grid-cols-4 gap-4 mb-6">
                <div class="card p-5" style="background:var(--lime)"><p class="text-sm opacity-70">ARR</p><p class="text-2xl font-black">₹188 Cr</p></div>
                <div class="card bg-white p-5"><p class="text-sm opacity-70">Margin</p><p class="text-2xl font-black">18%</p></div>
                <div class="card p-5 text-white" style="background:var(--olive)"><p class="text-sm opacity-70">Stores</p><p class="text-2xl font-black">3</p></div>
                <div class="card p-5 text-white" style="background:#6B8E23"><p class="text-sm opacity-70">Customers</p><p class="text-2xl font-black">250K+</p></div>
              </div>
              <div class="card bg-white p-6">
                <h3 class="font-bold mb-4">📄 Documents</h3>
                <div class="grid grid-cols-2 gap-3">
                  ${docs.map((d,i) => `
                    <button onclick="openFile('${d.name}','${d.url}')" class="flex items-center gap-3 p-4 rounded-xl text-left border-2 border-black hover:translate-y-[-2px] transition-all" style="${i===0?'background:var(--lime)':''}">
                      <span class="text-2xl">${d.icon}</span><span class="font-bold">${d.name}</span>
                    </button>
                  `).join('')}
                </div>
              </div>
            ` : currentTab === 'financials' ? `
              <h2 class="text-3xl font-black mb-6">Financial Highlights</h2>
              <div class="card bg-white p-6">
                <h3 class="font-bold mb-4">📈 Revenue Growth</h3>
                ${[{y:'FY23',v:12.5},{y:'FY24',v:65},{y:'FY25',v:80},{y:'FY26',v:120}].map(r => `
                  <div class="flex items-center gap-4 mb-3">
                    <span class="w-16 font-medium">${r.y}</span>
                    <div class="flex-1 h-8 bg-gray-100 rounded-full overflow-hidden border-2 border-black"><div class="h-full rounded-full" style="width:${(r.v/120)*100}%;background:var(--lime)"></div></div>
                    <span class="w-20 font-bold text-right">₹${r.v} Cr</span>
                  </div>
                `).join('')}
              </div>
            ` : currentTab === 'stores' ? `
              <h2 class="text-3xl font-black mb-6">Store Performance</h2>
              <div class="grid grid-cols-3 gap-4">
                ${[{c:'Delhi',r:'₹6.52 Cr',bg:'var(--lime)',tc:'#000'},{c:'Mumbai',r:'₹5.40 Cr',bg:'#6B8E23',tc:'#fff'},{c:'Hyderabad',r:'₹4.61 Cr',bg:'var(--olive)',tc:'#fff'}].map(s => `
                  <div class="card p-5" style="background:${s.bg};color:${s.tc}"><p class="font-black text-xl mb-1">📍 ${s.c}</p><p class="text-3xl font-black">${s.r}</p><p class="text-sm opacity-70">Q3 FY'26</p></div>
                `).join('')}
              </div>
            ` : `
              <h2 class="text-3xl font-black mb-6">All Documents</h2>
              <div class="grid grid-cols-2 gap-4">
                ${docs.map((d,i) => `
                  <div class="card bg-white overflow-hidden">
                    <div class="p-5 flex items-center gap-4" style="background:${i%2===0?'var(--lime)':'var(--olive)'};color:${i%2===0?'#000':'#fff'}">
                      <span class="text-4xl">${d.icon}</span><h3 class="font-bold text-lg">${d.name}</h3>
                    </div>
                    <button onclick="openFile('${d.name}','${d.url}')" class="w-full p-4 font-bold hover:bg-gray-50">Open →</button>
                  </div>
                `).join('')}
              </div>
            `}
          </div>
        </div>
      `);
    }

    async function showAdmin() {
      const usersSnap = await db.collection('users').get();
      const users = usersSnap.docs.map(d => ({id:d.id,...d.data()})).filter(u => u.role !== 'admin');
      const analyticsSnap = await db.collection('analytics').orderBy('timestamp','desc').limit(500).get();
      const analytics = analyticsSnap.docs.map(d => d.data());

      // Store globally for export
      window.adminData = { users, analytics };

      const fmt = ms => { if(!ms)return'0s'; const s=Math.floor(ms/1000),m=Math.floor(s/60); return m>0?`${m}m ${s%60}s`:`${s}s`; };
      const fmtDate = ts => ts?.toDate ? ts.toDate().toLocaleString() : 'N/A';

      render(`
        <div class="min-h-screen">
          <div class="bg-black text-white px-6 py-4 flex items-center justify-between">
            <div><h1 class="font-black text-xl">CDC Admin Dashboard</h1><p class="text-white/60 text-sm">🔥 Firebase Connected</p></div>
            <div class="flex gap-3">
              <div class="relative">
                <button onclick="toggleExportMenu()" id="exportBtn" class="px-4 py-2 rounded-lg hover:bg-white/10">📥 Export CSV</button>
                <div id="exportMenu" class="hidden absolute right-0 top-12 bg-white rounded-xl shadow-2xl overflow-hidden z-50" style="border:3px solid #000;min-width:220px">
                  <div class="p-3 font-bold text-black text-sm" style="background:var(--lime);border-bottom:2px solid #000">Export Options</div>
                  <button onclick="exportAllAnalytics()" class="w-full px-4 py-3 text-left text-black hover:bg-gray-100 border-b">📊 All Activity</button>
                  <button onclick="exportInvestorSummary()" class="w-full px-4 py-3 text-left text-black hover:bg-gray-100 border-b">👥 Investor Summary</button>
                  <button onclick="exportFileActivity()" class="w-full px-4 py-3 text-left text-black hover:bg-gray-100 border-b">📄 File Opens</button>
                  <button onclick="exportSessionData()" class="w-full px-4 py-3 text-left text-black hover:bg-gray-100">🕐 Session Data</button>
                </div>
              </div>
              <button onclick="showAdmin()" class="px-4 py-2 rounded-lg hover:bg-white/10">🔄 Refresh</button>
              <button onclick="logout()" class="px-4 py-2 rounded-lg hover:bg-white/10">🚪 Logout</button>
            </div>
          </div>
          <div class="p-6">
            <div class="grid grid-cols-4 gap-4 mb-6">
              <div class="card bg-white p-5"><p class="text-gray-500 text-sm">Investors</p><p class="text-2xl font-black">${users.length}</p></div>
              <div class="card bg-white p-5"><p class="text-gray-500 text-sm">Sessions</p><p class="text-2xl font-black">${analytics.filter(a=>a.type==='login').length}</p></div>
              <div class="card bg-white p-5"><p class="text-gray-500 text-sm">Files Opened</p><p class="text-2xl font-black">${analytics.filter(a=>a.type==='file_open').length}</p></div>
              <div class="card bg-white p-5"><p class="text-gray-500 text-sm">Tab Views</p><p class="text-2xl font-black">${analytics.filter(a=>a.type==='tab_view').length}</p></div>
            </div>
            <div class="card bg-white overflow-hidden">
              <div class="p-4" style="background:var(--olive)"><h3 class="font-bold text-white">Activity Log</h3></div>
              <div class="max-h-96 overflow-y-auto">
                ${analytics.slice(0,30).map(e => `
                  <div class="flex items-center gap-4 p-3 border-b hover:bg-gray-50">
                    <div class="w-10 h-10 rounded-lg flex items-center justify-center ${e.type==='login'?'bg-green-100':e.type==='logout'?'bg-red-100':e.type==='file_open'?'bg-blue-100':'bg-yellow-100'}">
                      ${e.type==='login'?'🟢':e.type==='logout'?'🔴':e.type==='file_open'?'📄':'👁️'}
                    </div>
                    <div class="flex-1">
                      <p class="text-sm"><strong>${e.userName}</strong> <span class="text-gray-400">(${e.company})</span></p>
                      <p class="text-xs text-gray-500">${e.type==='login'?'Logged in':e.type==='logout'?'Logged out ('+fmt(e.sessionDuration)+')':e.type==='file_open'?'Opened: '+e.fileName:'Viewed: '+e.tab+' ('+fmt(e.duration)+')'}</p>
                    </div>
                    <span class="text-xs text-gray-400">${fmtDate(e.timestamp)}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      `);
    }

    // Actions
    async function login() {
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      if (!email || !password) { showLogin('Enter email and password'); return; }
      try {
        await auth.signInWithEmailAndPassword(email, password);
      } catch (e) {
        let msg = e.message;
        if (e.code === 'auth/user-not-found') msg = 'No account found. Please sign up first.';
        if (e.code === 'auth/wrong-password' || e.code === 'auth/invalid-credential') msg = 'Invalid credentials.';
        showLogin(msg);
      }
    }

    async function signup() {
      const name = document.getElementById('name').value;
      const company = document.getElementById('company').value;
      const email = document.getElementById('signup-email').value;
      const phone = document.getElementById('phone').value;
      const password = document.getElementById('signup-password').value;
      const confirm = document.getElementById('confirm').value;

      if (!name || !company || !email || !password) { showSignup('Fill all required fields'); return; }
      if (password.length < 6) { showSignup('Password min 6 characters'); return; }
      if (password !== confirm) { showSignup('Passwords don\'t match'); return; }

      try {
        const cred = await auth.createUserWithEmailAndPassword(email, password);
        await db.collection('users').doc(cred.user.uid).set({
          name, email, company, phone, role: 'investor',
          createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        alert('Account created! Please login.');
        showLogin();
      } catch (e) {
        let msg = e.message;
        if (e.code === 'auth/email-already-in-use') msg = 'Email already registered.';
        showSignup(msg);
      }
    }

    async function logout() {
      if (sessionStart && userProfile?.role !== 'admin') {
        await trackEvent('logout', { sessionDuration: Date.now() - sessionStart });
      }
      await auth.signOut();
    }

    function switchTab(newTab) {
      const duration = Date.now() - tabStart;
      if (duration > 1000) trackEvent('tab_view', { tab: currentTab, duration });
      currentTab = newTab;
      tabStart = Date.now();
      showDataRoom();
    }

    function openFile(name, url) {
      trackEvent('file_open', { fileName: name });
      window.open(url, '_blank');
    }

    // CSV Export Functions
    function toggleExportMenu() {
      const menu = document.getElementById('exportMenu');
      menu.classList.toggle('hidden');
    }

    function downloadCSV(filename, csvContent) {
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = filename;
      link.click();
      URL.revokeObjectURL(link.href);
      document.getElementById('exportMenu').classList.add('hidden');
    }

    function exportAllAnalytics() {
      const { analytics } = window.adminData;
      const headers = ['Timestamp', 'Type', 'Investor Name', 'Email', 'Company', 'Tab/File', 'Duration (sec)', 'Session ID'];
      const rows = analytics.map(e => [
        e.timestamp?.toDate?.().toISOString() || '',
        e.type || '',
        e.userName || '',
        e.userEmail || '',
        e.company || '',
        e.tab || e.fileName || '',
        e.duration ? Math.round(e.duration / 1000) : (e.sessionDuration ? Math.round(e.sessionDuration / 1000) : ''),
        e.sessionId || ''
      ]);
      const csv = [headers, ...rows].map(r => r.map(c => `"${String(c).replace(/"/g, '""')}"`).join(',')).join('\n');
      downloadCSV(`cdc_analytics_${new Date().toISOString().split('T')[0]}.csv`, csv);
    }

    function exportInvestorSummary() {
      const { users, analytics } = window.adminData;
      const headers = ['Investor Name', 'Email', 'Company', 'Phone', 'Total Sessions', 'Total Time (min)', 'Files Opened'];
      const rows = users.map(u => {
        const events = analytics.filter(a => a.userEmail === u.email);
        const totalTime = events.filter(a => a.type === 'tab_view').reduce((s, e) => s + (e.duration || 0), 0);
        return [
          u.name || '',
          u.email || '',
          u.company || '',
          u.phone || '',
          events.filter(a => a.type === 'login').length,
          Math.round(totalTime / 60000),
          events.filter(a => a.type === 'file_open').length
        ];
      });
      const csv = [headers, ...rows].map(r => r.map(c => `"${String(c).replace(/"/g, '""')}"`).join(',')).join('\n');
      downloadCSV(`cdc_investor_summary_${new Date().toISOString().split('T')[0]}.csv`, csv);
    }

    function exportFileActivity() {
      const { analytics } = window.adminData;
      const headers = ['Timestamp', 'Investor Name', 'Email', 'Company', 'File Name'];
      const rows = analytics.filter(a => a.type === 'file_open').map(e => [
        e.timestamp?.toDate?.().toISOString() || '',
        e.userName || '',
        e.userEmail || '',
        e.company || '',
        e.fileName || ''
      ]);
      const csv = [headers, ...rows].map(r => r.map(c => `"${String(c).replace(/"/g, '""')}"`).join(',')).join('\n');
      downloadCSV(`cdc_file_activity_${new Date().toISOString().split('T')[0]}.csv`, csv);
    }

    function exportSessionData() {
      const { analytics } = window.adminData;
      const headers = ['Timestamp', 'Investor Name', 'Email', 'Company', 'Event Type', 'Session Duration (min)'];
      const rows = analytics.filter(a => a.type === 'login' || a.type === 'logout').map(e => [
        e.timestamp?.toDate?.().toISOString() || '',
        e.userName || '',
        e.userEmail || '',
        e.company || '',
        e.type === 'login' ? 'Login' : 'Logout',
        e.sessionDuration ? Math.round(e.sessionDuration / 60000) : ''
      ]);
      const csv = [headers, ...rows].map(r => r.map(c => `"${String(c).replace(/"/g, '""')}"`).join(',')).join('\n');
      downloadCSV(`cdc_sessions_${new Date().toISOString().split('T')[0]}.csv`, csv);
    }

    // Auth listener
    auth.onAuthStateChanged(async (user) => {
      currentUser = user;
      if (user) {
        const doc = await db.collection('users').doc(user.uid).get();
        userProfile = doc.exists ? doc.data() : { name: user.email, email: user.email };
        
        if (userProfile.role === 'admin') {
          showAdmin();
        } else {
          sessionId = 'session_' + Date.now();
          sessionStart = Date.now();
          tabStart = Date.now();
          await trackEvent('login');
          showDataRoom();
        }
      } else {
        showLogin();
      }
    });
  </script>
</body>
</html>
