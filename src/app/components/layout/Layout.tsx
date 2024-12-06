import { Box } from '@mui/material';
import Sidebar from '@/app/components/layout/sidebar/Sidebar' 
import Header from '@/app/components/layout/header/Header' 
import StatsCard from '@/app/components/ui/StatsCard';
import Filters from '@/app/components/ui/Filters';
import DataTable from '@/app/components/ui/DataTable';

const Dashboard = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, p: 2 }}>
        <Header />
        <Box sx={{ display: 'flex', gap: 2, my: 2 }}>
          <StatsCard title="Number Companies" value="00001" icon="🏢" />
          <StatsCard title="Total Subs 1 year" value="99999$" icon="💰" />
          <StatsCard title="Total Subs 1 month" value="9999$" icon="📊" />
        </Box>
        <Filters />
        <DataTable />
      </Box>
    </Box>
  );
};

export default Dashboard;
