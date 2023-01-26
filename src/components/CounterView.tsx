import React from "react";

interface IProps {
  value: number;
}

function CounterView({ value }: IProps) {
  return <p>Count: {value}</p>;
}

export default React.memo(CounterView);
