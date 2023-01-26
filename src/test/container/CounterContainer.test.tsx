import { render, fireEvent, screen } from "@testing-library/react";
import CounterContainer from "../../container/CounterContainer";

describe("<CounterContainer />", () => {
  function setUp() {
    render(<CounterContainer />);

    const count = screen.getByText("Count: 0");
    const inc = screen.getByText("+");
    const desc = screen.getByText("-");

    return { count, inc, desc };
  }

  it("Count 값과 CountButton이 잘 렌더링 되니?", () => {
    const { count, inc, desc } = setUp();

    expect(count).toBeInTheDocument();
    expect(inc).toBeInTheDocument();
    expect(desc).toBeInTheDocument();
  });

  it("inc를 클릭했을 때 Count값이 1씩 잘 오르니?", () => {
    const { inc } = setUp();
    const j = 5;

    for (let i = 0; i < j; i++) {
      fireEvent.click(inc);
    }

    const afterCount = screen.getByText(`Count: ${j}`);
    expect(afterCount).toBeInTheDocument();
  });

  it("desc를 클릭했을 때 Count값이 1씩 잘 내리니?", () => {
    const { desc } = setUp();
    const j = 5;

    for (let i = 0; i < j; i++) {
      fireEvent.click(desc);
    }

    const afterCount = screen.getByText(`Count: -${j}`);
    expect(afterCount).toBeInTheDocument();
  });
});
