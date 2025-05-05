import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  if (!totalPages || totalPages < 2) {
    return null; // No need to render if there is only one page or no pages
  }

  const handlePageClick = (data) => {
    onPageChange(data.selected + 1);
  };

  return (
    <div className="pagination-container flex justify-center my-4">
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        pageCount={totalPages}
        forcePage={currentPage - 1}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination flex space-x-2"}
        pageClassName={"page-item"}
        pageLinkClassName={"px-3 py-1 border rounded cursor-pointer"}
        previousClassName={"page-item"}
        previousLinkClassName={"px-3 py-1 border rounded cursor-pointer"}
        nextClassName={"page-item"}
        nextLinkClassName={"px-3 py-1 border rounded cursor-pointer"}
        breakClassName={"page-item"}
        breakLinkClassName={"px-3 py-1 border rounded cursor-pointer"}
        activeClassName={"bg-blue-600 text-white"}
        disabledClassName={"opacity-50 cursor-not-allowed"}
      />
    </div>
  );
};

export default Pagination;
