export default function Bill({ bill, onSetBill }) {
  return (
    <div>
      <p>How much was the bill?</p>
      <input
        value={bill}
        placeholder="Bill value"
        onChange={(e) => onSetBill(+e.target.value)}
      ></input>
    </div>
  );
}
