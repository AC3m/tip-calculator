export default function Result({ total, bill, tip }) {
  return (
    <div>
      <h1>
        You pay ${Number(total)} (${Number(bill)} + ${Number(tip)})
      </h1>
    </div>
  );
}
