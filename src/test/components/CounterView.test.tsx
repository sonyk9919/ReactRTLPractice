import { render, screen } from "@testing-library/react";
import CounterView from "../../components/CounterView";

describe("<CounterView />", () => {
  it("화면에 Count값을 출력", () => {
    for (let i = 0; i < 10; i++) {
      render(<CounterView value={i} />);
      const State = screen.getByText(`Count: ${i}`);
      expect(State).toBeInTheDocument();
    }
  });
});
