"use client";
import {useState, useEffect, use} from "react";

interface PaginationParams {
  currentPage: number;
  rowsPerPage: number;
  handleChangePage: (e: React.MouseEvent, newPage: number) => void;
  handleChangeRowsPerPage: (event: React.ChangeEvent<{value: unknown}>) => void;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  setRowsPerPage: React.Dispatch<React.SetStateAction<number>>;
}

const usePaginationParams = (
  listLength: number = 0,
  currentPath: string,
): PaginationParams => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(12);

  const storageKey = `currentPage-${currentPath}`; // Create a unique key based on the current path

  useEffect(() => {
    setCurrentPage(1);
  }, [listLength]);

  const handleChangePage = (e: React.MouseEvent, newPage: number): void => {
    e.preventDefault();
    setCurrentPage(parseInt(newPage.toString(), 10));
    e.stopPropagation();
    sessionStorage.setItem(storageKey, newPage.toString()); // Use the unique key
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<{value: unknown}>,
  ): void => {
    setRowsPerPage(event.target.value as number);
    setCurrentPage(1);
  };

  useEffect(() => {
    const page = sessionStorage.getItem(storageKey) || "1"; // Retrieve using the unique key
    setCurrentPage(parseInt(page, 10));
  }, [storageKey]); // Make sure to include the storageKey as a dependency

  return {
    currentPage,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
    setCurrentPage,
    setRowsPerPage,
  };
};

export default usePaginationParams;
