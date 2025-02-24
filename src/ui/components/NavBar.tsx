import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { NavSidebarPropsI } from "../common/interfaces.common";
import { NavBarStyles } from "../styles/NavSiderBar";

export const NavBar = ({
  drawerWidth = 240,
  handleDrawerToggle,
}: NavSidebarPropsI) => {
  return (
    <AppBar position="fixed" sx={NavBarStyles(drawerWidth)}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuOutlined />
        </IconButton>

        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          "GYM Dashboard"
        </Typography>

        <IconButton color="inherit">
          <LogoutOutlined />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
