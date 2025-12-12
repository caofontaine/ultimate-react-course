import { useState } from "react";

import Bill from "./components/Bill";
import BillInput from "./components/BillInput";
import TipInput from "./components/TipInput";

export default function App() {
  const [bill, setBill] = useState(0);
  const [totalTip, setTotalTip] = useState(0);

  const avgTip = totalTip / 2;
  const tip = bill * (avgTip / 100);
  const totalBill = bill + tip;

  function handleReset() {
    setBill(0);
    setTotalTip(0);
  }

  return (
    <div className="app">
      <BillInput onSetBill={setBill}>How much was the bill?</BillInput>
      <TipInput onSetTotalTip={setTotalTip}>
        How did you like the service?
      </TipInput>
      <TipInput onSetTotalTip={setTotalTip}>
        How did your friend like the service?
      </TipInput>

      {bill !== 0 && <Bill totalBill={totalBill} bill={bill} tip={tip} />}

      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
