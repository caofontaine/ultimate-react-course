import { useState } from "react";

export default function TipInput({ onSetTotalTip, children }) {
  const [tipValue, setTipValue] = useState("0");

  function handleTipChange(value) {
    if (tipValue !== value) {
      onSetTotalTip((prevTotalTip) => {
        return prevTotalTip - tipValue + Number(value);
      });
      setTipValue(value);
    } else {
      setTipValue(value);
      onSetTotalTip((prevTotalTip) => prevTotalTip + Number(value));
    }
  }

  return (
    <div>
      {children}

      <select
        value={tipValue}
        onChange={(e) => handleTipChange(e.target.value)}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">It was amazing! (20%)</option>
      </select>
    </div>
  );
}
