import { Box } from "@mui/material"
import StatsCard from "@/app/components/ui/StatsCard"
import Filters from "../components/ui/Filters"
import DataTable from "../components/ui/DataTable"

import { HeadCell } from "../components/ui/MyTableTypes"
import MyTable from "../components/ui/MyTable"



interface Data {
    id: number;
    calories: number;
    carbs: number;
    fat: number;
    name: string;
    protein: number;
    ss: number;
}

function createData(
    id: number,
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
    ss: number,
): Data {
    return {
        id,
        name,
        calories,
        fat,
        carbs,
        protein,
        ss,
    };
}
const headCells: readonly HeadCell[] = [
    {
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'name',
    },
    {
        id: 'calories',
        numeric: true,
        disablePadding: false,
        label: 'Calories',
    },
    {
        id: 'fat',
        numeric: true,
        disablePadding: false,
        label: 'Fat',
    },
    {
        id: 'carbs',
        numeric: true,
        disablePadding: false,
        label: 'Carbs',
    },
    {
        id: 'protein',
        numeric: true,
        disablePadding: false,
        label: 'Protein',
    },
    {
        id: 'ss',
        numeric: true,
        disablePadding: false,
        label: 'ss',
    },
];

const rows = [
    createData(1, 'Cupcake', 305, 3.7, 67, 4.3, 4.3),
    createData(2, 'Donut', 452, 25.0, 51, 4.9, 4.3),
    createData(3, 'Eclair', 262, 16.0, 24, 6.0, 4.3),
    createData(4, 'Frozen yoghurt', 159, 6.0, 24, 4.0, 4.3),
    createData(5, 'Gingerbread', 356, 16.0, 49, 3.9, 4.3),
    createData(6, 'Honeycomb', 408, 3.2, 87, 6.5, 4.3),
    createData(7, 'Ice cream sandwich', 237, 9.0, 37, 4.3, 4.3),
    createData(8, 'Jelly Bean', 375, 0.0, 94, 0.0, 4.3),
    createData(9, 'KitKat', 518, 26.0, 65, 7.0, 4.3),
    createData(10, 'Lollipop', 392, 0.2, 98, 0.0, 4.3),
    createData(11, 'Marshmallow', 318, 0, 81, 2.0, 4.3),
    createData(12, 'Nougat', 360, 19.0, 9, 37.0, 4.3),
    createData(13, 'Oreo', 437, 18.0, 63, 4.0, 4.3),
];

const page = () => {
    return (
        <div className="w-full">
            <Box sx={{ display: 'flex', gap: 2, my: 2 }}>
                <StatsCard title="Number Companies" value="00001" icon="🏢" />
                <StatsCard title="Total Subs 1 year" value="99999$" icon="💰" />
                <StatsCard title="Total Subs 1 month" value="9999$" icon="📊" />
            </Box>
            <Filters />
            <MyTable heades={headCells} rows={rows} />
        </div>
    )
}

export default page