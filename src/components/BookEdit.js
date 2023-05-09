import React, { useState } from "react";
import "../css/style.css";

const BookEdit = ({ book, onEdit }) => {
  const [title, setTitle] = useState(book.title);
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onEdit(title);
  };
  return (
    <div className="form-edit">
      <form onSubmit={handleSubmit}>
        <input className="title" value={title} onChange={handleChange} />
        <button>save</button>
      </form>
    </div>
  );
};

export default BookEdit;
