import React from "react";

interface IProps {
  onInc: () => void;
  onDesc: () => void;
}

function CounterButton({ onInc, onDesc }: IProps) {
  return (
    <div>
      <button onClick={onInc}>+</button>
      <button onClick={onDesc}>-</button>
    </div>
  );
}

export default React.memo(CounterButton);
