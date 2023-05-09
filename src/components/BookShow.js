import "../css/bookshow.css";
import BookEdit from "./BookEdit";
import React, { useState } from "react";

const BookShow = ({ book, onDelete, onEdit }) => {
  const [isEdit, setIsEdit] = useState(false);
  const handleclickDelete = () => {
    onDelete(book.id);
  };

  const handleclickEdit = () => {
    setIsEdit(!isEdit);
  };
  const editBook = (title) => {
    onEdit(book.id, title);
    setIsEdit(!isEdit);
  };
  let content = <h2>{book.title}</h2>;
  if (isEdit) {
    content = <BookEdit book={book} onEdit={editBook} />;
  }

  return (
    <div id={`book-id-${book.id}`} className="book-show">
      <div className="">
        <button className="edit" onClick={handleclickEdit}>
          edit
        </button>
        <button className="delete" onClick={handleclickDelete}>
          delete
        </button>
      </div>
      <img
        className="images "
        alt="books"
        src={`https://picsum.photos/seed/${book.id}/300/200`}
      />
      {content}
    </div>
  );
};

export default BookShow;
