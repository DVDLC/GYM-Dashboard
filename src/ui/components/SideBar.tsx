import {
  Drawer,
  Toolbar,
  Typography,
  Divider,
  List,
  Avatar,
} from "@mui/material";
import { NavSidebarPropsI } from "../common/interfaces.common";
import { DrawerStyles } from "../styles/NavSiderBar";

export const SideBar = ({
  drawerWidth = 240,
  open,
  handleDrawerToggle,
  children,
}: NavSidebarPropsI) => {
  const user = {};
  return (
    <Drawer
      variant={open ? "permanent" : "temporary"}
      open={open}
      onClose={handleDrawerToggle}
      sx={DrawerStyles(drawerWidth, open)}
    >
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          py: 2,
        }}
      >
        <Avatar
          alt={user?.displayName || "User Avatar"}
          src={user?.photoURL}
          sx={{ width: 80, height: 80, mb: 1 }}
        />
        <Typography variant="h6" noWrap component="div" align="center">
          {user?.displayName || "Nombre de Usuario"}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          {user?.userType || "Tipo de Usuario"}
        </Typography>
      </Toolbar>
      <Divider />
      <List>{children}</List>
    </Drawer>
  );
};
