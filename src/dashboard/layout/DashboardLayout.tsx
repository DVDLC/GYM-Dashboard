import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { FatherComponentsI } from "../../common/interfaces";
import { NavBar } from "../../ui/components/NavBar";
import { SideBar } from "../../ui/components/SideBar";
import { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import { Link } from "react-router-dom";
import { DashboardLayoutStyles } from "../../styles/DashboardLayout";

export const DashboardLayout = ({ children }: FatherComponentsI) => {
  const [open, setOpen] = useState(true);
  const drawerWidth = 240;

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <Box sx={DashboardLayoutStyles}>
      {/* <NavBar
        drawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
      /> */}
      <SideBar
        drawerWidth={drawerWidth}
        open={open}
        handleDrawerToggle={handleDrawerToggle}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/dashboard/home">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component={Link} to="/dashboard/users">
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Users" />
            </ListItemButton>
          </ListItem>
        </List>
      </SideBar>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
