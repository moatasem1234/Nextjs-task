import { Box, Typography, Card, CardContent } from '@mui/material';

interface StatsCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
}

const StatsCard = ({ title, value, icon }: StatsCardProps) => {
  return (
    <Card  sx={{ display: 'flex', justifyContent : "space-between", width: "100%", alignItems: 'center', px: 2 }}>
      <CardContent>
        <Typography variant="subtitle2">{title}</Typography>
        <Typography className='text-gray-500 text-[15px]' variant="h6">{value}</Typography>
      </CardContent>
      <Box>{icon}</Box>

    </Card>
  );
};

export default StatsCard;
