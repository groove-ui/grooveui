export interface NavItem {
  title: string;
  href?: string;
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export interface MainNavLinks extends NavItem {}
export interface SideNavLinks extends NavItemWithChildren {}

export interface DocsConfig {
  mainNav: MainNavLinks[];
  sideNav: SideNavLinks[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Docs",
      href: "/docs",
    },
    {
      title: "Components",
      href: "/docs/components/accordion",
    },
  ],
  sideNav: [
    {
      title: "Get Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
          items: [],
        },
      ],
    },
    {
      title: "Components",
      items: [
        {
          title: "Checkbox",
          href: "/docs/components/checkbox",
          items: [],
        },
        {
          title: "Calendar",
          href: "/docs/components/calendar",
          items: [],
        },
      ],
    },
  ],
};
