import { createContext, useState, useEffect } from "react";
import axios from "axios"

export const DataContext = createContext();

export const ContextProvider = ({ children }) => {
  const [photosData, setPhotosData] = useState([]);
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/photos").then((res) => {setPhotosData(res.data);
    });
  }, []); 


  const paginate=(pageNumber)=>{
    setCurrentPage(pageNumber)
  }

  return (
    <DataContext.Provider value={{ photosData, setPhotosData ,   currentPage,itemsPerPage, setCurrentPage, paginate, }}>
      {children}
    </DataContext.Provider>
  );
};
