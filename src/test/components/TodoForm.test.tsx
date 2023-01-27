import { fireEvent, render, screen } from "@testing-library/react";
import userFire from "@testing-library/user-event";
import TodoForm from "../../components/TodoForm";

describe("<TodoForm />", () => {
  function setUp() {
    const onInsert = jest.fn();
    render(<TodoForm onInsert={onInsert} />);
    const input = screen.getByPlaceholderText("할 일을 입력하세요");
    const btn = screen.getByText("등록");

    return { input, btn, onInsert };
  }

  it("text input과 등록 Btn이 있는가?", () => {
    const { input, btn } = setUp();

    expect(input).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
  });

  it("input을 변경하면 잘 변경되는가?", () => {
    const { input } = setUp();

    fireEvent.change(input, { target: { value: "fakeInput" } });

    expect(input).toHaveAttribute("value", "fakeInput");
  });

  it("등록 이벤트가 발생하면 input value를 초기화하고 onInsert함수를 실행시킨다.", () => {
    const { input, btn, onInsert } = setUp();

    fireEvent.change(input, { target: { value: "fakeInput" } });
    userFire.click(btn);

    expect(onInsert).toBeCalledWith("fakeInput");
    expect(input).toHaveAttribute("value", "");
  });
});
