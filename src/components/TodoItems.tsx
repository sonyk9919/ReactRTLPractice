import { ITodoItem } from "../test/components/TodoItem.test";
import TodoItem from "./TodoItem";

interface IProps {
  todos: ITodoItem[];
  removeFn: (id: number) => void;
  onChange: (id: number, value: boolean) => void;
}

export default function TodoItems({ todos, removeFn, onChange }: IProps) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          removeFn={removeFn}
          onChange={onChange}
        />
      ))}
    </div>
  );
}
