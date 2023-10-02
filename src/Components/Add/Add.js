import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

import { DataContext } from "../../Context/DataContext";

const Add = () => {
  const navigate = useNavigate();

  const { photosData, setPhotosData } = useContext(DataContext);
  const [inputData, setInputData] = useState({ title: "", thumbnailUrl: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("https://jsonplaceholder.typicode.com/photos", inputData, {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then((res) => {
        alert("Data added Successfully");
        setPhotosData((previousPhotos) => [...previousPhotos, res.data]);
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-light p-5">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="url" className="mt-3">
              ThumbnailURL
            </label>
            <input
              type="url"
              name="url"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, thumbnailUrl: e.target.value })
              }
            />
          </div>

          <div>
            <label htmlFor="name">Text:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, title: e.target.value })
              }
            />
          </div>

          <div className="mt-3">
            <button className="btn btn-info" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add;
