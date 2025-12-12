export default function Bill({ totalBill, bill, tip }) {
  return (
    <h2>
      You pay ${totalBill} (${bill} + ${tip})
    </h2>
  );
}
