import Link from "next/link";

import styles from "@/styles/navbar.module.css";
import { usePathname } from "next/navigation";

export default function MainLinksNavbar() {
  const pathName = usePathname();

  return (
    <nav>
      <ul className={styles.navbarLinks}>
        <li>
          <Link href="/" className={`${pathName === "/" ? "active" : ""}`}>
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/docs"
            className={`${pathName === "/docs" ? "active" : ""}`}
          >
            Docs
          </Link>
        </li>
        <li>
          <Link
            href="/docs/components"
            className={`${pathName === "/docs/components" ? "active" : ""}`}
          >
            Components
          </Link>
        </li>
      </ul>
    </nav>
  );
}
