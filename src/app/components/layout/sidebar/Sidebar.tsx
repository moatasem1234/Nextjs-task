"use client"

import { ExpandLess, ExpandMore  } from '@mui/icons-material';
import { Box, Collapse, List, ListItem, ListItemButton,  ListItemText } from '@mui/material';
import { useState } from 'react';
import { CollapseButtonlist, CollapselistItme, listContainer, mainListItem, sidebarContainer } from './Sidebar.styled';


const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Box sx={sidebarContainer}>
      <List sx={listContainer} >
        <ListItem
          sx={mainListItem}
        >
          <ListItemText className='text-white font-bold'
            primary="Dashboard"
          />
        </ListItem>
        <ListItemButton
          sx={CollapseButtonlist}
          onClick={handleClick}
        >
          <ListItemText primary="Companies" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List className='ps-4' component="div" >
            <ListItemButton sx={CollapselistItme}>
              <ListItemText primary="All Companies" />
            </ListItemButton>
            <ListItemButton sx={CollapselistItme}>
              <ListItemText primary="All Branches" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </Box>
  );
};

export default Sidebar;
