import React from "react";

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageClick = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      onPageChange(pageNumber);
    }
  };

  return (
    <div className="pagination flex items-center justify-center mt-8 m-2 gap-1">
      <button
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
        className="bg-blue-100 hover:bg-blue-200 text-gray-600 font-semibold py-2 px-4 rounded-l"
      >
        Previous
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => handlePageClick(index + 1)}
          className={`${
            currentPage === index + 1
              ? "bg-blue-300 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          } font-semibold py-2 px-4`}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="bg-blue-100 hover:bg-blue-200 text-gray-600 font-semibold py-2 px-4 rounded-r"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
