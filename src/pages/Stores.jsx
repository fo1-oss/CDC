import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { storeChartData, storeChartOptions } from '../data/chartConfig';
import PageHeader from '../components/PageHeader';
import StatPill from '../components/StatPill';
import StoreCard from '../components/StoreCard';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const statPills = [
  { label: 'Monthly Footfall*', value: '9,000+' },
  { label: 'Conversion Rate*', value: '35%' },
  { label: 'Rent to Revenue*', value: '3%' },
  { label: 'ABV*', value: '₹15,500' }
];

const stores = [
  {
    name: 'Delhi',
    meta: '4,000 sqft • Since Feb 2022',
    revenue: '₹6.52 Cr',
    barWidth: '100%',
    apparelPct: '78%',
    shoesPct: '22%',
    variant: 'default'
  },
  {
    name: 'Mumbai',
    meta: '2,500 sqft • Since May 2023',
    revenue: '₹5.40 Cr',
    barWidth: '83%',
    apparelPct: '74%',
    shoesPct: '26%',
    variant: 'dark'
  },
  {
    name: 'Hyderabad',
    meta: '3,700 sqft • Since Oct 2024',
    revenue: '₹4.61 Cr',
    barWidth: '71%',
    apparelPct: '74%',
    shoesPct: '26%',
    variant: 'darker'
  }
];

function Stores() {
  return (
    <section className="section active">
      <PageHeader
        title="Retail -"
        highlight="Traction"
      />

      <div className="stat-pills">
        {statPills.map((pill, index) => (
          <StatPill key={index} label={pill.label} value={pill.value} />
        ))}
      </div>

      <div className="grid grid-3" style={{ marginBottom: '24px' }}>
        {stores.map((store, index) => (
          <StoreCard key={index} {...store} />
        ))}
      </div>

      <div className="cdc-card white">
        <div className="chart-header">
          <div className="chart-title">Store-wise Revenue Comparison</div>
          <div className="chart-underline"></div>
        </div>
        <div className="chart-wrapper">
          <Bar data={storeChartData} options={storeChartOptions} />
        </div>
      </div>

      <p style={{ fontSize: '11px', color: '#666', marginTop: '16px' }}>*YTD - FY'26</p>
    </section>
  );
}

export default Stores;
