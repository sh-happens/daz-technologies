  export type NavItemProps = {
    readonly key: string;
    readonly text?: string;
    readonly icon?: React.ReactNode;
    readonly path?: string;
    readonly isNavItem?: boolean;
    readonly notice?: number;
  };
  export type NavItem = NavItemProps & {
    readonly items?: readonly NavItemProps[];
  };
  
  export type AppSidebarProps = {
    readonly navItems: readonly NavItem[];
  };