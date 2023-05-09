import React from "react";
import BookShow from "./BookShow";
const BookList = ({ books, onDelete, onEdit }) => {
  const listItem = books.map((book) => {
    return (
      <BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book} />
    );
  });

  return <div className="book-list">{listItem}</div>;
};

export default BookList;
