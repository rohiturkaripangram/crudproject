import React, {useContext} from 'react'
import { DataContext } from '../../Context/DataContext'
import "./Add.css"

const Add = () => {
    const {onAdd} =useContext(DataContext)

    const handleSubmit=(e)=>{
       e.preventDefault();
       onAdd(e.target.title.value, e.target.url.value )
       e.target.title.value='';
       e.target.url.value=''
    }
  return (
    <div className='Add'>
        <form  onSubmit={handleSubmit}>
            <h3>Add Photos</h3>
        <input placeholder='title' name="title" />
        <input placeholder='url' name='url' />
        <button className='submit' onSubmit={handleSubmit}>
            Add Here
        </button>
        </form>
       
    </div>
  )
}
export default Add