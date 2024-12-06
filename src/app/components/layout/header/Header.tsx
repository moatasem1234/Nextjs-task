"use client"
import { useState } from "react";

import { Box, Link, Select, MenuItem, Typography, Avatar, SelectChangeEvent } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import Image from "next/image";
import {
  headerContainer,
  logoContainer,
  navigationContainer,
  linksContainer,
  selectContainer,
  linkStyle,
  userContainer,
  selectElement,
  selectElementIteme,
} from "./Header.styles";

const Header = () => {

  const [currency, setCurrency] = useState("USD"); // Initialize as an empty string

  const handleChange = (event: SelectChangeEvent<string>) => {
    setCurrency(event.target.value);

  };

  return (
    <Box sx={headerContainer}>
      <Box sx={logoContainer}>
        <Image
          src="./logoMelo.svg"
          alt="logoMelo logo"
          width={100}
          height={20}
          priority
        />
      </Box>

      <Box sx={navigationContainer}>
        <Box sx={linksContainer}>
          <Link sx={linkStyle} component="button" variant="body2">
            Home
          </Link>
          <Link sx={linkStyle} component="button" variant="body2">
            Supscraptions
          </Link>
          <Link sx={linkStyle} component="button" variant="body2">
            Companies
          </Link>
        </Box>
        <Box sx={userContainer}>
          <Box sx={selectContainer}>
            <Select
              value={currency} // Always controlled
              onChange={handleChange}
              sx={selectElement}
              defaultValue="USD"
            >
              <MenuItem sx={selectElementIteme} value="USD">
                <Avatar sx={{ width: 20, height: 20 }} alt="User Avatar" src="./langImages/US.svg" />
                <Typography>English</Typography>
              </MenuItem>
              <MenuItem sx={selectElementIteme} value="TRY">
                <Avatar sx={{ width: 20, height: 20 }} alt="User Avatar" src="./langImages/US.svg" />
                <Typography>Türkiye</Typography>
              </MenuItem>
              <MenuItem sx={selectElementIteme} value="FR">
                <Avatar sx={{ width: 20, height: 20 }} alt="User Avatar" src="./langImages/US.svg" />
                <Typography>French</Typography>
              </MenuItem>
            </Select>

          </Box>
          <Typography sx={{ color: "white" }}>Ahmad</Typography>
          <Avatar alt="User Avatar" src="./user-avatar.png" />
          <SettingsIcon sx={{ color: "white" }} />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
