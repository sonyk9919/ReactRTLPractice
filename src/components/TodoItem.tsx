import React from "react";
import { ITodoItem } from "../test/components/TodoItem.test";

interface IProps {
  todo: ITodoItem;
  removeFn: (id: number) => void;
  onChange: (id: number, value: boolean) => void;
}

export default function TodoItem({ todo, removeFn, onChange }: IProps) {
  return (
    <li key={todo.id}>
      <input
        type="checkbox"
        checked={todo.type}
        id={todo.id + ""}
        onChange={() => onChange(todo.id, !todo.type)}
      />
      <label
        htmlFor={todo.id + ""}
        style={todo.type ? { textDecoration: "line-through" } : undefined}
      >
        {todo.content}
      </label>
      <button onClick={() => removeFn(todo.id)}>삭제하기</button>
    </li>
  );
}
