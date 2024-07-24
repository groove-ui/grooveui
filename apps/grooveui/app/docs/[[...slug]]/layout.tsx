import Sidebar from "@/components/docs/Sidebar";
import { docsConfig } from "@/config/routes";
import styles from "@/styles/aside.module.css";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.asideContainerTop}>
      <aside className={styles.asideContainer}>
        <Sidebar config={docsConfig} />
      </aside>
      {children}
    </div>
  );
}
