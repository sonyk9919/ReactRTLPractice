import { fireEvent, render, screen } from "@testing-library/react";
import TodoContainer from "../../container/TodoContainer";
import { ITodoItem } from "../components/TodoItem.test";

describe("<TodoContainer />", () => {
  const todos: ITodoItem[] = [
    { id: 0, content: "jest를 활용하여 TodoList만들기", type: true },
    { id: 1, content: "git 공부하기", type: false },
  ];
  function setUp() {
    render(<TodoContainer />);
    const input = screen.getByPlaceholderText("할 일을 입력하세요");
    const inputBtn = screen.getByText("등록");
    const contents = [];
    const removeBtns = screen.getAllByText("삭제하기");
    for (let i = 0; i < todos.length; i++) {
      const todo = screen.getByText(todos[i].content);
      const todoCheckBox = screen.getByLabelText(todos[i].content, {
        selector: "input",
      });
      contents.push([todo, todoCheckBox]);
    }

    return { input, inputBtn, contents, removeBtns };
  }

  it("기본적인 렌더링", () => {
    setUp();
  });

  it("todoList에 값 추가하기", () => {
    const { input, inputBtn } = setUp();
    const newContent = "할 일 추가";

    fireEvent.change(input, { target: { value: newContent } });
    fireEvent.click(inputBtn);

    const newTodo = screen.getByText(newContent);
    const newTodoCheckBox = screen.getByLabelText(newContent);
    const newRemoveBtn = screen.getAllByText("삭제하기");

    expect(newTodo).toBeInTheDocument();
    expect(newTodoCheckBox).toBeInTheDocument();
    expect(newRemoveBtn.length).toBe(todos.length + 1);
  });

  it("todoList에서 첫번째 값 삭제하기", () => {
    const { removeBtns, contents } = setUp();

    fireEvent.click(removeBtns[0]);

    expect(contents[0][0]).not.toBeInTheDocument();
    expect(contents[0][1]).not.toBeInTheDocument();
    expect(removeBtns[0]).not.toBeInTheDocument();
  });

  it("todoList에 값 추가하고 삭제하기", () => {
    const { input, inputBtn } = setUp();
    const newContent = "할 일 추가";

    fireEvent.change(input, { target: { value: newContent } });
    fireEvent.click(inputBtn);

    const newTodo = screen.getByText(newContent);
    const newTodoCheckBox = screen.getByLabelText(newContent, {
      selector: "input",
    });
    const newRemoveBtn = screen.getAllByText("삭제하기");

    expect(newTodo).toBeInTheDocument();
    expect(newTodoCheckBox).toBeInTheDocument();
    expect(newRemoveBtn.length).toBe(todos.length + 1);

    fireEvent.click(newRemoveBtn[todos.length]);

    expect(newTodo).not.toBeInTheDocument();
    expect(newTodoCheckBox).not.toBeInTheDocument();
    expect(newRemoveBtn[todos.length]).not.toBeInTheDocument();
  });

  it("checkBox를 클릭 시 false => true, true => false", () => {
    const { contents } = setUp();

    fireEvent.click(contents[0][1]);

    expect(contents[0][1]).not.toBeChecked();
    expect(contents[0][0]).not.toHaveStyle("text-decoration: line-through");

    fireEvent.click(contents[0][1]);

    expect(contents[0][1]).toBeChecked();
    expect(contents[0][0]).toHaveStyle("text-decoration: line-through");

    fireEvent.click(contents[0][1]);

    expect(contents[0][1]).not.toBeChecked();
    expect(contents[0][0]).not.toHaveStyle("text-decoration: line-through");
  });
});
