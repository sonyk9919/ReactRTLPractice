import { useState, useCallback } from "react";
import CounterButton from "../components/CounterButton";
import CounterView from "../components/CounterView";

export default function CounterContainer() {
  const [value, setValue] = useState(0);
  const onInc = useCallback(() => {
    setValue((prev) => prev + 1);
  }, []);
  const onDesc = useCallback(() => {
    setValue((prev) => prev - 1);
  }, []);
  return (
    <div>
      <CounterView value={value} />
      <CounterButton onInc={onInc} onDesc={onDesc} />
    </div>
  );
}
