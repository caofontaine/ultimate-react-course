export default function BillInput({ onSetBill, children }) {
  return (
    <div>
      {children}

      <input
        type="text"
        placeholder="0"
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}
