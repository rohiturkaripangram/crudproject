import React, { useState, useEffect,useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { DataContext } from "../../Context/DataContext";


const Edit = () => {
    const {photosData,setPhotosData}=useContext(DataContext)
  const { id } = useParams();
  const [data, setData] = useState({ title: '', thumbnailUrl: '' });
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const handleUpdate = (event) => {
    event.preventDefault();
    axios.put(`https://jsonplaceholder.typicode.com/photos/${id}`, data)
      .then((res) => {
        alert("Data updated successfully!");
        const updatedRecords = photosData.map(element => (element.id === parseInt(id, 10) ? data : element));
        setPhotosData(updatedRecords);
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-light p-5">
        <form onSubmit={handleUpdate}>
        
          <div>
            <label htmlFor="url" className="mt-3">
            thumbnailUrl
            </label>
            <input
              type="url"
              name="url"
              className="form-control"
              value={data.thumbnailUrl}
              onChange={(e) => setData({ ...data, thumbnailUrl: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={data.title}
              onChange={(e) => setData({ ...data, title: e.target.value })}
            />
          </div>

          <div className="mt-3">
            <button type="submit" className="btn btn-info">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;
