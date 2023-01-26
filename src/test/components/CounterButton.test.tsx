import { render, screen, fireEvent } from "@testing-library/react";
import CounterButton from "../../components/CounterButton";

describe("<CounterButton/>", () => {
  function setUp() {
    const onInc = jest.fn();
    const onDesc = jest.fn();

    render(<CounterButton onInc={onInc} onDesc={onDesc} />);

    const inc = screen.getByText("+");
    const desc = screen.getByText("-");

    return {
      onInc,
      onDesc,
      inc,
      desc,
    };
  }

  it("+, -버튼을 가지고 있니?", () => {
    const { inc, desc } = setUp();
    expect(inc).toBeInTheDocument();
    expect(desc).toBeInTheDocument();
  });

  it("+, -버튼 클릭하면 Props로 전달된 Fn이 제대로 호출되니?", () => {
    const { onInc, onDesc, inc, desc } = setUp();

    fireEvent.click(inc);
    fireEvent.click(desc);

    expect(onInc).toBeCalled();
    expect(onDesc).toBeCalled();
  });
});
