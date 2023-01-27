import { render, screen } from "@testing-library/react";
import userFire from "@testing-library/user-event";
import TodoItems from "../../components/TodoItems";
import { ITodoItem } from "./TodoItem.test";

describe("<TodoItems />", () => {
  const fakeTodos: ITodoItem[] = [
    { id: 0, content: "fakeTodo 1", type: false },
    { id: 1, content: "fakeTodo 2", type: false },
    { id: 2, content: "fakeTodo 3", type: false },
    { id: 3, content: "fakeTodo 4", type: false },
  ];

  function setUp() {
    const removeFn = jest.fn();
    const onChange = jest.fn();
    render(
      <TodoItems todos={fakeTodos} removeFn={removeFn} onChange={onChange} />
    );
    const removeBtn = screen.getAllByText("삭제하기");
    return { removeFn, removeBtn };
  }

  it("todo가 잘 렌더링 되니?", () => {
    const {} = setUp();

    for (let i = 0; i < fakeTodos.length; i++) {
      screen.getByText(fakeTodos[i].content);
    }
  });

  it("removeBtn을 클릭하면 해당 id가 잘 넘어가니?", () => {
    const { removeFn, removeBtn } = setUp();

    for (let i = 0; i < removeBtn.length; i++) {
      userFire.click(removeBtn[i]);
      expect(removeFn).toBeCalledWith(fakeTodos[i].id);
    }
  });
});
