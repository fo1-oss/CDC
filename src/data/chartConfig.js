export const colors = {
  lime: '#C0E529',
  limeDark: '#9BBF1E',
  olive: '#6B8E23',
  oliveDark: '#4A5D23',
  oliveDarker: '#3D4A2B',
  black: '#000000',
  white: '#FFFFFF',
  cream: '#F5F3EB'
};

export const revenueChartData = {
  labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q1', 'Q2', 'Q3'],
  datasets: [{
    label: 'Revenue (₹ Cr)',
    data: [17.1, 17.4, 23.6, 21.7, 27.1, 28.4, 37.8],
    backgroundColor: colors.lime,
    borderRadius: 4
  }]
};

export const revenueChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: {
      callbacks: {
        label: ctx => `₹${ctx.raw} Cr`
      }
    }
  },
  scales: {
    x: { grid: { display: false }, ticks: { font: { weight: 'bold' } } },
    y: { beginAtZero: true, ticks: { callback: v => `₹${v}` } }
  }
};

export const channelDonutData = {
  labels: ['Online', 'Retail'],
  datasets: [{
    data: [41, 59],
    backgroundColor: [colors.oliveDarker, colors.oliveDark],
    borderWidth: 3,
    borderColor: '#000'
  }]
};

export const channelDonutOptions = {
  responsive: true,
  cutout: '65%',
  plugins: {
    legend: { display: false },
    tooltip: { enabled: true }
  }
};

export const miniDonutOptions = {
  responsive: true,
  cutout: '55%',
  plugins: { legend: { display: false } }
};

export const onlineDonutData = {
  labels: ['Shoes', 'Apparel'],
  datasets: [{
    data: [92, 8],
    backgroundColor: [colors.oliveDarker, colors.oliveDark],
    borderWidth: 2,
    borderColor: '#000'
  }]
};

export const retailDonutData = {
  labels: ['Shoes', 'Apparel'],
  datasets: [{
    data: [75, 25],
    backgroundColor: [colors.oliveDarker, colors.oliveDark],
    borderWidth: 2,
    borderColor: '#000'
  }]
};

export const channelTrendData = {
  labels: ["FY'25 Q1", "Q2", "Q3", "Q4", "FY'26 Q1", "Q2", "Q3"],
  datasets: [
    { label: 'Online', data: [9.31, 8.32, 11.78, 11.08, 12.76, 14.0, 21.0], backgroundColor: colors.oliveDark, borderRadius: 4 },
    { label: 'Retail', data: [7.79, 9.08, 11.82, 10.62, 14.34, 14.4, 16.8], backgroundColor: colors.lime, borderRadius: 4 }
  ]
};

export const channelTrendOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: { legend: { position: 'top' } },
  scales: {
    x: { stacked: true, grid: { display: false } },
    y: { stacked: true, beginAtZero: true, ticks: { callback: v => `₹${v}` } }
  }
};

export const storeChartData = {
  labels: ["FY'25 Q1", "FY'25 Q2", "FY'25 Q3", "FY'25 Q4", "FY'26 Q1", "FY'26 Q2", "FY'26 Q3"],
  datasets: [
    { label: 'Delhi', data: [5.65, 4.51, 4.67, 3.92, 5.91, 5.34, 6.52], backgroundColor: colors.lime, borderRadius: 4 },
    { label: 'Mumbai', data: [2.08, 4.56, 4.22, 2.84, 4.61, 4.66, 5.40], backgroundColor: colors.oliveDark, borderRadius: 4 },
    { label: 'Hyderabad', data: [0, 0, 0, 2.94, 3.82, 3.80, 4.61], backgroundColor: colors.oliveDarker, borderRadius: 4 }
  ]
};

export const storeChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: { legend: { position: 'top' } },
  scales: {
    x: { grid: { display: false } },
    y: { beginAtZero: true, ticks: { callback: v => `₹${v}` } }
  }
};

export const fundingDonutData = {
  labels: ['Store Expansion', 'Store Opex', 'Inventory', 'Marketing', 'Team'],
  datasets: [{
    data: [21, 8, 6, 3.5, 1.5],
    backgroundColor: [colors.oliveDarker, colors.oliveDark, colors.olive, colors.limeDark, colors.lime],
    borderWidth: 0
  }]
};

export const fundingDonutOptions = {
  responsive: true,
  cutout: '55%',
  plugins: { legend: { display: false } }
};

export const expansionChartData = {
  labels: ['Delhi NCR', 'Mumbai', 'Hyderabad', 'Bangalore', 'Ahmedabad', 'Chandigarh'],
  datasets: [
    { label: '2025', data: [4000, 2500, 3700, 0, 0, 0], backgroundColor: colors.oliveDarker, borderRadius: 4 },
    { label: '2027', data: [6500, 7500, 3700, 15000, 0, 0], backgroundColor: colors.oliveDark, borderRadius: 4 },
    { label: '2030', data: [30000, 30000, 3700, 30000, 3000, 3000], backgroundColor: colors.lime, borderRadius: 4 }
  ]
};

export const expansionChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: { legend: { position: 'top' } },
  scales: {
    x: { stacked: true, grid: { display: false } },
    y: { stacked: true, beginAtZero: true, ticks: { callback: v => `${v/1000}K sqft` } }
  }
};
