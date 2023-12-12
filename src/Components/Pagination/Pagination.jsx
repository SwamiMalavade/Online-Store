import React from "react";

export const Pagination = ({ totalPosts, postsPerPage, setCurrentPage }) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="d-flex justify-content-center pb-3">
      {pages.map((page, index) => {
        return (
          <button
            type="button"
            class="btn btn-secondary mx-2"
            key={index}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};
