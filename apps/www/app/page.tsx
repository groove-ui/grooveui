import { allDocs } from "contentlayer/generated";

import styles from "@/styles/page.module.css";
import Accordion, {
  AccordionItem,
} from "@/packages/components/accordion/AccordionItem";

export default function Home() {
  const items = [
    {
      title: "Section 1",
      content: <p>Content for section 1</p>,
    },
    {
      title: "Section 2",
      content: <p>Content for section 2</p>,
    },
    {
      title: "Section 3",
      content: <p>Content for section 3</p>,
    },
  ];

  return (
    <main className={styles.main}>
      <h1 className={styles.mainText}>Make good websites with me!</h1>
      <p className={styles.mainDes}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <button className={styles.firstAction}>Get Started</button>
      {/* Header */}
      <Accordion>
        <AccordionItem key="1" title="Content 1">
          <p>Text of content 1</p>
        </AccordionItem>
        <AccordionItem key="2" title="Content 2">
          <p>Text of content 2</p>
        </AccordionItem>
        <AccordionItem key="3" title="Content 3">
          <p>Text of content 3</p>
        </AccordionItem>
      </Accordion>
    </main>
  );
}
