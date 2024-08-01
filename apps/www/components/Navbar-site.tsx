"use client";

import MainLinksNavbar from "./MainLinks-Navbar-site";
import SecondaryLinks from "./Navbar-SecondaryLinks";

export default function NavbarSite() {
  const docsPaths = [
    "/docs/guide/introduction",
    "/docs/guide/installation",
    "/docs/guide/upgrade-to-v2",
  ];

  const searchBtn = <button>Click</button>;

  //   const handlePressNavbarItem = (name: string, url: string) => {
  //     trackEvent("NavbarItem", {
  //       name,
  //       action: "press",
  //       category: "navbar",
  //       data: url,
  //     });
  //   };

  return (
    <header className="fixed w-full flex justify-between items-center px-10 py-3">
      <MainLinksNavbar />
      <SecondaryLinks />
    </header>
  );
}
