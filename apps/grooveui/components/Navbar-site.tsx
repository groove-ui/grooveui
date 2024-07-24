"use client";

import styles from "@/styles/navbar.module.css";
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
    <header className={styles.HeaderNavbar}>
      <MainLinksNavbar />
      <SecondaryLinks />
    </header>
  );
}
