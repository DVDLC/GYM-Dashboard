import { Theme } from "@mui/material/styles";
export const DrawerStyles = (
  drawerWidth: number,
  open: boolean | undefined
) => ({
  width: drawerWidth,
  flexShrink: 0,
  ...(open && {
    display: { xs: "block", sm: "block" },
    "& .MuiDrawer-paper": {
      width: drawerWidth,
      boxSizing: "border-box",
      transition: (theme: Theme) =>
        theme.transitions.create(["width"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
    },
  }),
  ...(!open && {
    display: { xs: "block", sm: "none" },
  }),
  zIndex: (theme: Theme) => theme.zIndex.appBar - 1,
});

export const NavBarStyles = (drawerWidth: number) => ({
  width: { sm: `calc(100% - ${drawerWidth}px)` },
  ml: { sm: `${drawerWidth}px` },
  transition: (theme: Theme) =>
    theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
});
