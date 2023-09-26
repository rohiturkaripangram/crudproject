import React, { useContext, useState } from "react";
import "./Photos.css";

import { DataContext } from "../../Context/DataContext";
import Pagination from "../Pagination/Pagination";

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
      {loading ? (
        <h1>...loading</h1>
      ) : (
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
          <Pagination />
        </div>
      )}
    </div>
  );
};

export default Photos;
