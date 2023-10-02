import React, { useContext, useState } from "react";
import {Link,useNavigate} from "react-router-dom"
import "./Photos.css";

import { DataContext } from "../../Context/DataContext";
import CustomPagination from "../Pagination/Pagination";
import PaginationComp from "../Pagination/Pagination";
import axios from "axios"

const Photos = () => {
  const {
    photosData,
    setPhotosData,
    currentPage,
    itemsPerPage,
   
  } = useContext(DataContext);


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = photosData.slice(indexOfFirstItem, indexOfLastItem);


  const handleDelete = (element) => {
    axios(`https://jsonplaceholder.typicode.com/photos/${element.id}`, {
      method: "DELETE",
    }).then(() => {
      setPhotosData((previousPhotos) =>
        previousPhotos.filter((item) => item !== element)
      );
    });
  };


  return (
    <div>
      <div className="text-center record">
        <Link to="/Add" className="btn btn-primary">
          Add Record
        </Link>
      </div>
        <div className="media">
          {currentItems.map((element) => (
            <div key={element.id} className="card">
              <img src={element.thumbnailUrl} alt="images" />
              <div className="cardText">
                <p>{element.title}</p>
                <div className="button-group">
                <button className="bg-danger border border-0 rounded-1 text-light inline-block">
                  <Link class="btn-link" onClick={()=>handleDelete(element)}>Delete</Link>
                </button>
                <button className="bg-warning border border-0 rounded-1 text-light inline-block">
                  <Link class="btn-link" to={`/Edit/${element.id}`}>Edit</Link>
                </button>
                  </div>
                
              </div>
            </div>
          ))}
          <PaginationComp />
        </div>
      
    </div>
  );
};

export default Photos;
