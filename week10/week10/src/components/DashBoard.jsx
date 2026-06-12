import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="page-card dashboard-card">
      <div className="card-badge">Operations Center</div>
      <h2>Librarian Dashboard</h2>
      <p>Welcome back. Use the tools below to keep your library collection in great shape.</p>

      <div className="dashboard-actions">
        <Link className="primary-btn" to="/deletebook">
          Delete Books
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
