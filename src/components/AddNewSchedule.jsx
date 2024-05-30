import { useState } from "react";
import { v4 as uuid } from "uuid";

const AddNewSchedule = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);

  const onClick = () => {
    if (!title.trim() || !description.trim()) {
      alert("제목과 내용 둘 다 입력해주세요");
      return;
    }
    const newTodo = { title, description, date, id: uuid() };

    setTodos((prev) => {
      return [...prev, newTodo];
    });

    // 입력 필드를 초기화합니다.
    setTitle("");
    setDescription("");
    setDate("");
  };

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const onChangeDate = (e) => {
    setDate(e.target.value);
  };

  return (
    <div>
      <input
        type="date"
        placeholder="date"
        onChange={onChangeDate}
        value={date}
      />
      <input
        type="text"
        placeholder="할일"
        onChange={onChangeTitle}
        value={title}
      />
      <input
        type="text"
        placeholder="내용"
        onChange={onChangeDescription}
        value={description}
      />
      <button onClick={onClick}>저장</button>
      <div>
        {todos.map((todo) => (
          <div key={todo.id}>
            <p>
              {todo.date}: {todo.title} - {todo.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddNewSchedule;
