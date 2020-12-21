import React, { useRef } from "react";
interface TodoFormProps {
  onAdd(title: string): void;
}
export const TodoForm: React.FC<TodoFormProps> = (props) => {
  const ref = useRef<HTMLInputElement>(null);
  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      props.onAdd(ref.current!.value);
      ref.current!.value = '';
    }
  };
  return (
    <div className={"input-field mt-2"}>
      <input
        ref={ref}
        type="text"
        id="title"
        onKeyPress={keyPressHandler}
        placeholder="Input your ToDo"
      />
      <label className="active" htmlFor="title">
        Input your ToDo
      </label>
    </div>
  );
};
