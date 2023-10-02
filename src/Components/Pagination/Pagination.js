import React, { useContext } from "react";
import { DataContext } from "../../Context/DataContext";
import Pagination from "react-bootstrap/Pagination";

const PaginationComp = () => {
  const { itemsPerPage, photosData, currentPage, paginate } =
    useContext(DataContext);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(photosData.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const currentPageGroup = Math.ceil(currentPage / 10);

  const startIndex = (currentPageGroup - 1) * 10;
  const endIndex = Math.min(startIndex + 10, pageNumbers.length);
  const currentNumbers = pageNumbers.slice(startIndex, endIndex);

  return (
    <div>
      <Pagination>
        <Pagination.Prev
          onClick={() =>
            paginate(currentPage > 1 ? startIndex - 10 : currentPage)
          }
        />

        {currentNumbers.map((number) => (
          <Pagination.Item
            key={number}
            active={number === currentPage}
            onClick={() => paginate(number)}
          >
            {number}
          </Pagination.Item>
        ))}

        <Pagination.Next
          onClick={() =>
            paginate(
              currentPage < Math.ceil(photosData.length / itemsPerPage)
                ? endIndex + 1
                : currentPage
            )
          }
        />
      </Pagination>
    </div>
  );
};

export default PaginationComp;
