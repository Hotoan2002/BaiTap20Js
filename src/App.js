import { useState, useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";

const App = () => {
  const [books, setBooks] = useState([]);

  const createBook = async (title) => {
    const res = await axios.post(`http://localhost:3001/books/`, {
      title,
    });
    const updateBooks = [...books, res.data];
    setBooks(updateBooks);
  };

  const editBook = async (id, newTitle) => {
    await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });
    const updatedBook = { id, title: newTitle };
    const updatedBooks = books.map((book) =>
      book.id === id ? updatedBook : book
    );
    setBooks(updatedBooks);
  };

  const deleteBook = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const updateBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updateBooks);
  };

  const fectBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };
  useEffect(() => {
    fectBooks();
  }, []);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBook} onEdit={editBook} />
      <BookCreate onCreate={createBook} />
    </div>
  );
};

export default App;
