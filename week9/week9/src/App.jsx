import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import AddBook from "./components/AddBook";

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <nav className="top-nav">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/addbook" className="nav-link">
            Add Book
          </Link>
        </nav>
        <main className="content-area">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addbook" element={<AddBook />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
export default App;
