import React from "react";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
 
  let pages = [];

  const handlePrevPage = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };
  const handleNextPage = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };
  if(totalPages < 5){
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  }else{
    pages = [1, 2, 3, 4];
  }

  return (
    <div className="pagination-wrap mt-50">
      <nav aria-label="Page navigation example">
        <ul className="pagination list-wrap">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`} onClick={handlePrevPage}>
            <div style={{ cursor: currentPage === 1 ? "not-allowed" : "pointer" }} className="page-link">
              <i className="fas fa-arrow-left"></i>
            </div>
          </li>
          {pages.map((page) => (
            <li
              key={page}
              className={`page-item ${currentPage === page ? "active" : ""}`}
              onClick={() => onPageChange(page)}
            >
              <div style={{ cursor: "pointer" }} className="page-link">
                {page}
              </div>
            </li>
          ))}
          {currentPage > 4 && (
            <li className={`page-item active`}>
              <div style={{ cursor: "pointer" }} className="page-link">
                {currentPage}
              </div>
            </li>
          )}
          <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`} onClick={handleNextPage}>
            <div style={{ cursor: currentPage === totalPages ? "not-allowed" : "pointer" }} className="page-link">
              <i className="fas fa-arrow-right"></i>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
