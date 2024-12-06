import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const DataTable = () => {
  const rows = [
    { id: 1, address: 'Syria', capacity: 21, date: '01/11/2024', condition: '001', action: 'show' },
    // أضف المزيد من البيانات
  ];

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Address</TableCell>
          <TableCell>Capacity</TableCell>
          <TableCell>Date</TableCell>
          <TableCell>Condition</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.id}</TableCell>
            <TableCell>{row.address}</TableCell>
            <TableCell>{row.capacity}</TableCell>
            <TableCell>{row.date}</TableCell>
            <TableCell>{row.condition}</TableCell>
            <TableCell>{row.action}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DataTable;
