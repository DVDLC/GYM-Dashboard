export interface NavSidebarPropsI {
  drawerWidth: number;
  handleDrawerToggle: () => void;
  open?: boolean;
  children?: React.ReactNode;
}
