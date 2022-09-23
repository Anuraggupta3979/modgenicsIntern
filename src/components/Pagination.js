import React from "react";
import Pagination from "react-js-pagination";
import { useNavigate } from "react-router-dom";

function PaginationTwo() {
  // We start with an empty list of items.

  const navigate = useNavigate();

  const loadData = (number) => {
    navigate(`img${number}`);
  };
  return (
    <>
      <div className={"paginate-container mt-3"}>
        <Pagination
          activePage={1}
          itemsCountPerPage={1}
          firstPageText={false}
          lastPageText={false}
          totalItemsCount={4}
          pageRangeDisplayed={4}
          onChange={(pageNumber) => {
            loadData(pageNumber);
          }}
          itemClass="page-item"
          linkClass="page-link"
          getPageUrl={(i) => "/img3"}
        />
      </div>
    </>
  );
}

export default PaginationTwo;
