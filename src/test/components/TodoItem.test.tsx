import { fireEvent, render, screen } from "@testing-library/react";
import userFire from "@testing-library/user-event";
import TodoItem from "../../components/TodoItem";

export interface ITodoItem {
  id: number;
  content: string;
  type: boolean;
}

describe("<TodoItem />", () => {
  const fakeTodoItem: ITodoItem = {
    id: 0,
    content: "fakeTodo!!",
    type: false,
  };

  function setUp(props?: ITodoItem) {
    const removeFn = jest.fn();
    const onChange = jest.fn();
    render(
      <TodoItem
        todo={props ? props : fakeTodoItem}
        removeFn={removeFn}
        onChange={onChange}
      />
    );
    const content = screen.getByText(fakeTodoItem.content);
    const removeBtn = screen.getByRole("button");
    const checkBox = screen.getByLabelText(fakeTodoItem.content, {
      selector: "input",
    });
    return { removeFn, content, removeBtn, checkBox, onChange };
  }

  it("TodoItem은 fakeTodoItem의 content와 삭제 버튼, CheckBox를 가지고 있는가?", () => {
    const { content, removeBtn, checkBox } = setUp();

    expect(checkBox).toBeInTheDocument();
    expect(content).toBeInTheDocument();
    expect(removeBtn).toBeInTheDocument();
  });

  it("삭제 버튼을 클릭하면 todoId를 매개변수로 removeFn이 작동하는 가?", () => {
    const { removeBtn, removeFn } = setUp();

    userFire.click(removeBtn);

    expect(removeFn).toBeCalledWith(fakeTodoItem.id);
  });

  it("type이 false이면 취소선이 없어야 한다", () => {
    const { checkBox, content } = setUp({
      id: 0,
      content: "fakeTodo!!",
      type: false,
    });

    expect(checkBox).not.toBeChecked();
    expect(content).not.toHaveStyle("text-decoration: line-through;");
  });

  it("type이 true이면 취소선이 있어야한다", () => {
    const { checkBox, content } = setUp({
      id: 0,
      content: "fakeTodo!!",
      type: true,
    });

    expect(checkBox).toBeChecked();
    expect(content).toHaveStyle("text-decoration: line-through;");
  });

  it("check Box가 클릭되면 onChange함수가 id와 !value를 인자로 실행되는가?", () => {
    const { onChange, checkBox } = setUp();

    fireEvent.click(checkBox);

    expect(onChange).toBeCalledWith(fakeTodoItem.id, !fakeTodoItem.type);
  });
});
