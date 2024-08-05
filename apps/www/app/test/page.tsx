"use client";

import { Tabs } from "@/packages/components/tabs/Tabs";
import { Item } from "react-stately";

// import { Radio, RadioGroup } from "@/packages/components/radio/Radio";

// Test component
export default function Test() {
  return (
    <main>
      <div className="flex justify-center">
        <Tabs aria-label="History of Ancient Rome">
          <Item key="FoR" title="Founding of Rome">
            Arma virumque cano, Troiae qui primus ab oris.
          </Item>
          <Item key="MaR" title="Monarchy and Republic">
            Senatus Populusque Romanus.
          </Item>
          <Item key="Emp" title="Empire">
            Alea jacta est.
          </Item>
        </Tabs>
      </div>
    </main>
  );
}
