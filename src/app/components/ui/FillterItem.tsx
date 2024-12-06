"use client"

import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Badge, Box, Grid, Select, TextField, Typography } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
export default function FillterItem() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
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

                <FilterAltIcon />

                <Badge sx={{ pt: 1, fontWeight: "bold", fontSize: "25px" }} color="primary" badgeContent={0} showZero>
                    Fillter
                </Badge>
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
                        bgcolor: "white",
                        p: 3,
                        borderRadius: "24px",

                        width: "400px",
                    }}
                >
                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                        Filters
                    </Typography>
                    <Grid container spacing={2}>
                        {/* Field Input */}
                        <Grid item xs={4}>
                            <TextField
                                placeholder="Filde"
                                variant="outlined"
                                fullWidth
                                size="small"
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "8px",
                                    },
                                }}
                            />
                        </Grid>

                        {/* Operators Dropdown */}
                        <Grid item xs={4}>
                            <Select
                                defaultValue=""
                                fullWidth
                                size="small"
                                displayEmpty
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "8px",
                                    },
                                }}
                            >
                                <MenuItem value="" disabled>
                                    opretors
                                </MenuItem>
                                <MenuItem value="equals">Equals</MenuItem>
                                <MenuItem value="notEquals">Not Equals</MenuItem>
                                <MenuItem value="contains">Contains</MenuItem>
                            </Select>
                        </Grid>

                        {/* Value Input */}
                        <Grid item xs={4}>
                            <TextField
                                placeholder="value"
                                variant="outlined"
                                fullWidth
                                size="small"
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "8px",
                                    },
                                }}
                            />
                        </Grid>

                        {/* Apply Filter Button */}
                        <Grid item xs={12}>
                            <Button
                                variant="contained"
                                fullWidth
                                sx={{
                                    bgcolor: "#007bff",
                                    color: "white",
                                    borderRadius: "8px",
                                    textTransform: "none",
                                    "&:hover": {
                                        bgcolor: "#0056b3",
                                    },
                                }}
                            >
                                Apply Filter
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Menu>
        </div>
    );
}
