"use client";
import React, {useState, useEffect} from "react";

interface PaginationProps {
  totalItems: number;
  rowsPerPage: number;
  handleChangePage: (e: React.MouseEvent, page: number) => void;
  currentPage: number;
  customClass?: string;
}

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  rowsPerPage,
  handleChangePage,
  currentPage,
  customClass,
}) => {
  const [firstPage, setFirstPage] = useState(false);
  const [lastPage, setLastPage] = useState(false);
  const [goPage, setGoPage] = useState<number | string>("");

  const numberPage = Math.ceil(totalItems / rowsPerPage);

  useEffect(() => {
    setFirstPage(currentPage === 1);
    setLastPage(currentPage === numberPage);
  }, [currentPage, numberPage]);

  const handleKeyDown = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target;
    if (value) {
      const parsedValue = parseInt(value, 10);
      setGoPage(isNaN(parsedValue) ? "" : Math.min(parsedValue, numberPage));
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    const code = e.keyCode || e.which;
    if (code === 13) {
      if (goPage !== "") {
        handleChangePage(e as any, goPage as number);
        setGoPage("");
      }
    }
  };

  return (
    <div
      className={`card-footer bg-white flex justify-between items-center mt-4 ${customClass}`}
      style={{minHeight: "60px"}}
    >
      {numberPage > 1 && (
        <>
          <div className="text-gray-500">
            Page {parseFloat(currentPage as any)} / {numberPage} Pages
          </div>
          <nav>
            <ul className="flex items-center space-x-2">
              <li>
                <button
                  className={`py-2 px-4 bg-secondary text-white rounded ${
                    firstPage ? "cursor-not-allowed opacity-50" : ""
                  }`}
                  onClick={(e) => handleChangePage(e, 1)}
                  disabled={firstPage}
                >
                  First
                </button>
              </li>
              {currentPage > 1 && (
                <li>
                  <button
                    className="py-2 px-4 bg-secondary text-white rounded"
                    onClick={(e) => handleChangePage(e, currentPage - 1)}
                  >
                    Back
                  </button>
                </li>
              )}
              <li>
                <form noValidate>
                  <input
                    type="number"
                    className="page-link inputPageNumber py-2 px-4"
                    placeholder={`${parseFloat(
                      currentPage as any,
                    )}/${numberPage}`}
                    onKeyPress={handleKeyPress}
                    onChange={handleKeyDown}
                    value={goPage}
                  />
                </form>
              </li>
              {currentPage < numberPage && (
                <li>
                  <button
                    className="py-2 px-4 bg-secondary text-white rounded"
                    onClick={(e) => handleChangePage(e, currentPage + 1)}
                  >
                    Next
                  </button>
                </li>
              )}
              <li>
                <button
                  className={`py-2 px-4 bg-secondary text-white rounded ${
                    lastPage ? "cursor-not-allowed opacity-50" : ""
                  }`}
                  onClick={(e) => handleChangePage(e, numberPage)}
                  disabled={lastPage}
                >
                  Last
                </button>
              </li>
            </ul>
          </nav>
        </>
      )}
    </div>
  );
};

export default Pagination;
