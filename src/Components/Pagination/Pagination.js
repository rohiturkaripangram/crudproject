import React, {useContext} from 'react'
import "./Pagination.css"
import { DataContext } from '../../Context/DataContext'

const Pagination = () => {
    const {itemsPerPage, photosData,paginate}=useContext(DataContext)
    const pageNumbers=[];
    for(let i=0;i<=Math.ceil(photosData.length /itemsPerPage);i++){
        pageNumbers.push(i)
    }

  return (
    <div>
       <ul className='pagination'>
         {pageNumbers.map(element=><li key={element} className='page-item'>
       <a href="!#" className='page-link' onClick={()=>paginate(element)}>{element}</a>
         </li>)}
       </ul>
    </div>
  )
}

export default Pagination