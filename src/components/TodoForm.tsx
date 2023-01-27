import { useState } from "react";

interface IProps {
  onInsert: (value: string) => void;
}

export default function TodoForm({ onInsert }: IProps) {
  const [value, setValue] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setValue((prev) => value);
  };
  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onInsert(value);
    setValue((prev) => "");
  };
  return (
    <div>
      <input
        value={value}
        onChange={onChange}
        placeholder="할 일을 입력하세요"
      />
      <button type="submit" onClick={onSubmit}>
        등록
      </button>
    </div>
  );
}
