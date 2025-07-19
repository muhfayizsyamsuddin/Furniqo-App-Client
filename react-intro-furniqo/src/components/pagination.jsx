function Pagination({ meta, onPageChange }) {
  const { page, totalPages, hasPrev, hasNext } = meta;
  if (totalPages <= 1) {
    return null;
  }
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  return (
    <>
      {/* Pagination */}
      <nav className="mt-4">
        <ul className="pagination pagination-sm justify-content-end">
          <li className={`page-item ${!hasPrev ? "disabled" : ""}`}>
            <button
              className="page-link bg-dark text-light border-secondary"
              onClick={() => onPageChange(page - 1)}
              disabled={!hasPrev}
            >
              &laquo;
            </button>
          </li>
          {pages.map((p) => (
            <li key={p} className={`page-item ${p === page ? "active" : ""}`}>
              <button
                className={`page-link ${
                  p === page
                    ? "bg-warning text-dark fw-bold border-0"
                    : "bg-dark text-light border-secondary"
                }`}
                onClick={() => onPageChange(p)}
                disabled={p === page}
              >
                {p}
              </button>
            </li>
          ))}
          <li className={`page-item ${!hasNext ? "disabled" : ""}`}>
            <button
              className="page-link bg-dark text-light border-secondary"
              onClick={() => onPageChange(page + 1)}
            >
              &raquo;
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Pagination;
