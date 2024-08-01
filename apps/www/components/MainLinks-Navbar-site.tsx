import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MainLinksNavbar() {
  const pathName = usePathname();

  return (
    <nav className="flex gap-5 items-center">
      <ul className="flex gap-4 text-neutral-500">
        <li>
          <Link
            href="/"
            className={` ${
              pathName === "/"
                ? "active"
                : "hover:text-neutral-400 transition duration-300"
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/docs"
            className={` ${
              pathName === "/docs"
                ? "active"
                : "hover:text-neutral-400 transition duration-300"
            }`}
          >
            Docs
          </Link>
        </li>
        <li>
          <Link
            href="/docs/components/accordion"
            className={` ${
              pathName === "/docs/components/accordion"
                ? "active"
                : "hover:text-neutral-400 transition duration-300"
            }`}
          >
            Components
          </Link>
        </li>
      </ul>
      <span className="text-zinc-200 text-sm px-4 py-1 rounded-full bg-indigo-600">
        v1.0.0
      </span>
    </nav>
  );
}
