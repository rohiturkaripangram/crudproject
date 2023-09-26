import { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

export const ContextProvider = ({ children }) => {
  const [photosData, setPhotosData] = useState([]);
  const [loading,setLoading]=useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  
  const getData = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/photos");
      if (response.status === 200) {
        setLoading(true)
        const data = await response.json();
        setPhotosData(data);
        setLoading(false)
      } 
    } catch (error) {
      console.error(error);
    }
  };

  const onAdd = async (title, url) => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/photos", {
        method: "POST",
        body: JSON.stringify({
          title: title,
          url: url,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      if (response.status === 201) {
        const data = await response.json();
        setPhotosData((photosData) => [...photosData, data]);
      } else {
        console.log("Error adding data");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onDelete = async (id) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`, {
        method: "DELETE",
      });
      if (response.status === 200) {
        setPhotosData((photosData) =>
          photosData.filter((element) => element.id !== id)
        );
      } else {
        console.log("Error deleting data");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const paginate=(pageNumber)=>{
    setCurrentPage(pageNumber)
  }

  return (
    <DataContext.Provider value={{ photosData, onDelete, onAdd, loading ,currentPage,itemsPerPage, setCurrentPage, paginate}}>
      {children}
    </DataContext.Provider>
  );
};
