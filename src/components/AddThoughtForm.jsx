import { useState } from "react"
import { generateId, getNewExpirationTime } from "./utilities"

function AddThoughtForm({addThought}) {
  const [text,setText] = useState('')
  const handleTextChange = (e) =>{
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const thought = {
      id:generateId(),
      text:text,
      expiresAt:getNewExpirationTime(),
    }
    if(text.length===0)return
    addThought(thought)
    setText('')
  }
  return (
    <div>
        <form className="addThghtForm" onSubmit={handleSubmit}>
            <input type="text"
                   aria-label="What's on your mind" 
                   placeholder="What's on your mind" 
                   value={text}
                   onChange={handleTextChange}
            />
            <button type="submit" >Add</button>
        </form>
    </div>
  )
}

export default AddThoughtForm