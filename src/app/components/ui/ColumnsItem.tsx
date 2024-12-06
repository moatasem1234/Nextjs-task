"use client"

import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import {  Box, Checkbox, List, ListItem, ListItemText, TextField, Typography } from '@mui/material';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';
export default function ColumnsItem() {


    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const columns = ['ID', 'Capacity', '.....', '.....']; // أسماء الأعمدة

    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                className='flex items-center hover:bg-white  gap-2 text-black'
            >
                <ViewColumnIcon />
                <Typography sx={{ pt: 1, fontWeight: "bold", fontSize: "25px" }} >
                    Columns
                </Typography>
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                sx={{
                    "& .MuiPaper-root": {
                        borderRadius: "12px", // تغيير الزوايا
                        boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)", // تغيير الشادو
                    },
                }}
            >
                <Box
                    sx={{
                        bgcolor: 'white',
                        borderRadius: '16px',
                        p: 2,
                        width: 250,
                    }}
                >
                    {/* عنوان المكون */}
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 'bold',
                            mb: 2,
                            textAlign: 'left',
                            color: 'black',
                        }}
                    >
                        Columns
                    </Typography>

                    {/* مربع البحث */}
                    <TextField
                        placeholder="search"
                        variant="outlined"
                        size="small"
                        sx={{
                            width: '100%',
                            mb: 2,
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '8px',
                                bgcolor: '#F8F9FA',
                            },
                            '& input': {
                                padding: '8px',
                                fontSize: '0.9rem',
                            },
                        }}
                    />

                    {/* قائمة الأعمدة */}
                    <List sx={{ p: 0 }}>
                        {columns.map((column, index) => (
                            <ListItem
                                key={index}
                                sx={{
                                    bgcolor: '#407BFF',
                                    borderRadius: '8px',
                                    mb: 1,
                                    px: 2,
                                    color: 'white',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}
                            >
                                {/* نص العمود */}
                                <ListItemText
                                    primaryTypographyProps={{
                                        sx: { fontWeight: 'bold', fontSize: '0.9rem' },
                                    }}
                                    primary={column}
                                />
                                {/* مربع الاختيار */}
                                <Checkbox
                                    size="small"
                                    sx={{
                                        color: 'white',
                                        '&.Mui-checked': {
                                            color: 'white',
                                        },
                                    }}
                                />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Menu>
        </div>
    );
}
