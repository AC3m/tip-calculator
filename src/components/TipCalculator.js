import { useState } from "react";
import Bill from "./Bill";
import Rate from "./Rate";
import Result from "./Result";
import Reset from "./Reset";

export default function TipCalculator() {
  const [bill, setBill] = useState("");
  const [yourRating, setYourRating] = useState(0);
  const [friendRating, setFriendRating] = useState(0);
  const tip = yourRating + friendRating;
  const avgTipValue = tip / 2;
  const total = bill + avgTipValue;

  function handleReset() {
    setBill("");
    setYourRating(0);
    setFriendRating(0);
  }

  return (
    <div className="App">
      <Bill bill={bill} onSetBill={setBill} />
      <Rate onSelect={setYourRating} rating={yourRating}>
        How did you like the service?
      </Rate>
      <Rate onSelect={setFriendRating} rating={friendRating}>
        How did your friend like the service?
      </Rate>
      {bill > 0 && (
        <>
          <Result total={total} bill={bill} tip={avgTipValue} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}
