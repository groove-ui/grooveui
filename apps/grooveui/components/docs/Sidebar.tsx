"use client";

import { DocsConfig, SideNavLinks } from "@/config/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "@/styles/aside.module.css";

export interface SidebarConfigprop {
  config: DocsConfig;
}

export default function Sidebar({ config }: SidebarConfigprop) {
  const pathName = usePathname();

  const items = config.sideNav;

  return (
    <div>
      {items.map((item, i) => (
        <div key={i} className={styles.SidebarInnerContainer}>
          <h3>{item.title}</h3>
          {item?.items?.length && (
            <SingleItemSidebar items={item.items} pathName={pathName} />
          )}
        </div>
      ))}
    </div>
  );
}

interface SingleItemsSidebarparams {
  items: SideNavLinks[];
  pathName: string | null;
}

function SingleItemSidebar({ items, pathName }: SingleItemsSidebarparams) {
  return items?.length ? (
    <ul className={styles.SingleItemContainer}>
      {items.map((item, i) =>
        item.href ? (
          <li key={i}>
            <Link
              href={item.href}
              className={`${pathName === item.href ? "active" : ""}`}
            >
              {item.title}
            </Link>
          </li>
        ) : (
          ""
        )
      )}
    </ul>
  ) : null;
}
