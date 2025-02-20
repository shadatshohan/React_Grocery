import React from 'react'
import { useRef } from 'react'
import { FaPlus } from 'react-icons/fa'

const AddItem = ({newItem,setNewItem,handleSubmit}) => {
    const introRef=useRef();
  return (
    <form className="addForm" onSubmit={handleSubmit}>
        <label htmlFor="addItem">Add Item</label>
        <input 
         autoFocus
          type="text"
          ref={introRef}
          id="addItem"
          required
          placeholder='Add Item'
          value={newItem}
          onChange={(e)=>setNewItem(e.target.value)}
         />
        <button
          type="submit"
          aria-label='Add Item'
          onclick={()=>introRef.current.focus()}
        >
            <FaPlus/>
        </button>
    </form>
  )
}

export default AddItem