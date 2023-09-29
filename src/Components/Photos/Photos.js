import React, { useContext, useState } from "react";
import "./Photos.css";

import { DataContext } from "../../Context/DataContext";
import CustomPagination from "../Pagination/Pagination";
import PaginationComp from "../Pagination/Pagination";

const Photos = () => {
  const {
    photosData,
    onDelete,
    loading,
    currentPage,
    itemsPerPage,
    setCurrentPage,
  } = useContext(DataContext);

  const handleDelete = (id) => {
    onDelete(id);
  };

  //get current photos

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = photosData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
    
        <div className="media">
          {currentItems.map((element) => (
            <div key={element.id} className="card">
              <img src={element.thumbnailUrl} alt="images" />
              <div className="cardText">
                <p>{element.title}</p>
                <button className="view">
                  {" "}
                  <a href={element.url}>view</a>
                </button>
                <button
                  className="delete"
                  onClick={() => handleDelete(element.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
          <PaginationComp />
        </div>
      
    </div>
  );
};

export default Photos;
