import { useState } from "react";

const SearchEvent = () => {
  const [description, setDescription] = useState("");

  const onClick = () => {
    if (!description.trim()) {
      alert("내용을 입력해주세요");
      if (length <= 2) {
        alert("두 글자 이상 입력해주세요");
      }
    }
  };

  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="검색어"
        onChange={onChangeDescription}
        value={description}
      />
      <button onClick={onClick}>검색</button>
    </div>
  );
};

export default SearchEvent;
