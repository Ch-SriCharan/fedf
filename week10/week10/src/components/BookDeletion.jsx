import { useState } from "react";

function BookDeletion() {
  const [books, setBooks] = useState([
    { id: 1, title: "Java Programming" },
    { id: 2, title: "Python Fundamentals" },
    { id: 3, title: "React Development" }
  ]);

  const [loading, setLoading] = useState(false);

  const deleteBook = async (id) => {
    setLoading(true);

    // Simulating API Call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setBooks((currentBooks) => currentBooks.filter((book) => book.id !== id));
    setLoading(false);
  };

  return (
    <div className="page-card deletion-card">
      <div className="card-badge">Catalog Control</div>
      <h2>Book Deletion System</h2>
      <p>Remove outdated titles quickly and keep your library collection accurate.</p>

      {loading && <div className="status-message">Deleting Book...</div>}

      <ul className="book-list">
        {books.map((book) => (
          <li key={book.id} className="book-item">
            <span>{book.title}</span>
            <button
              className="danger-btn"
              onClick={() => deleteBook(book.id)}
              disabled={loading}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookDeletion;
