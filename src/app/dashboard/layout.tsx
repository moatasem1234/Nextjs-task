import { Box } from '@mui/material';
import Sidebar from '@/app/components/layout/sidebar/Sidebar'
import Header from '@/app/components/layout/header/Header'


const Dashboard = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <Box >
            <Header />
            <Box sx={{ display: 'flex', gap: 2, flexGrow: 1, p: 2 }}>

                <Sidebar />
                {children}

            </Box>
        </Box>
    );
};

export default Dashboard;
