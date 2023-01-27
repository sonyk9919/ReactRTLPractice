import { useCallback, useState } from "react";
import TodoForm from "../components/TodoForm";
import TodoItems from "../components/TodoItems";
import { ITodoItem } from "../test/components/TodoItem.test";

export default function TodoContainer() {
  const [todos, setTodos] = useState<ITodoItem[]>([
    { id: 0, content: "jest를 활용하여 TodoList만들기", type: true },
    { id: 1, content: "git 공부하기", type: false },
  ]);

  const onInsert = useCallback(
    (value: string) => {
      const newTodo: ITodoItem = {
        id: todos.length,
        content: value,
        type: false,
      };
      const newTodos: ITodoItem[] = [...todos, newTodo];
      setTodos((prev) => newTodos);
    },
    [todos, setTodos]
  );

  const onChange = useCallback(
    (id: number, value: boolean) => {
      setTodos((prev) =>
        prev.map((todo) => {
          if (todo.id === id) {
            return { ...todo, type: value };
          }
          return { ...todo };
        })
      );
    },
    [setTodos]
  );

  const removeFn = useCallback((id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  return (
    <div>
      <TodoForm onInsert={onInsert} />
      <TodoItems todos={todos} removeFn={removeFn} onChange={onChange} />
    </div>
  );
}
