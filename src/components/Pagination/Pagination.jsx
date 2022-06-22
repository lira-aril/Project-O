import React from "react";
import "./Pagination.css";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <ul className="pagination__list">
        {pageNumbers.map(number => (
          <li key={number} className="page__item">
            <a onClick={() => paginate(number)} href="#" className="page__link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;

