import { useState } from "react";

function AddBook() {
  const [bookTitle, setBookTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [message, setMessage] = useState("");
  const [books, setBooks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      id: Date.now(),
      title: bookTitle,
      author,
      isbn,
    };

    setBooks((prevBooks) => [...prevBooks, newBook]);
    setMessage(`Book Added Successfully: ${bookTitle} by ${author}`);
    setBookTitle("");
    setAuthor("");
    setIsbn("");
  };

  return (
    <div className="page-card form-card">
      <h2>Add New Book</h2>
      <p className="section-copy">
        Fill in the details below to add a title to your library.
      </p>
      <form onSubmit={handleSubmit} className="book-form">
        <label htmlFor="title">Book Title</label>
        <input
          id="title"
          type="text"
          value={bookTitle}
          onChange={(e) => setBookTitle(e.target.value)}
          required
          aria-label="Book Title"
        />

        <label htmlFor="author">Author</label>
        <input
          id="author"
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
          aria-label="Author Name"
        />

        <label htmlFor="isbn">ISBN</label>
        <input
          id="isbn"
          type="text"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
          required
          aria-label="ISBN Number"
        />

        <button type="submit">Add Book</button>
      </form>
      {message && <div className="success-message">{message}</div>}

      <div className="books-section">
        <h3>Books List</h3>
        {books.length === 0 ? (
          <p className="empty-state">No books added yet.</p>
        ) : (
          <ul className="books-list">
            {books.map((book) => (
              <li key={book.id} className="book-item">
                <strong>{book.title}</strong>
                <span>by {book.author}</span>
                <span className="isbn-text">ISBN: {book.isbn}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
export default AddBook;