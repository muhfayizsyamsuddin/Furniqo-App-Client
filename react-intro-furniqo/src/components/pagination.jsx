function Pagination({ meta, onPageChange }) {
  const { page, totalPages, hasPrev, hasNext } = meta;
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  return (
    <>
      {/* Pagination */}
      <nav className="mt-4">
        <ul className="pagination justify-content-end">
          <li className={`page-item ${!hasPrev ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => onPageChange(page - 1)}
            >
              Previous
            </button>
          </li>
          {pages.map((p) => (
            <li key={p} className={`page-item ${p === page ? "active" : ""}`}>
              <button className="page-link" onClick={() => onPageChange(p)}>
                {p}
              </button>
            </li>
          ))}
          <li className={`page-item ${!hasNext ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => onPageChange(page + 1)}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Pagination;
