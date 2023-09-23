import { useEffect } from "react"

const Thoughts = ({thought,removeThought}) => {
  const handleRemove = () =>{
    console.log(thought.id)
        removeThought(thought.id)
  }

  useEffect(()=>{
    const timeRemainig = thought.expiresAt - Date.now();
    const timeout = setTimeout(()=>removeThought(thought.id),timeRemainig)
    return ()=>{
      clearTimeout(timeout)
    }
  },[thought])

  return (
    <>
     <div>
      <li className="thght" >
        <button 
          aria-label="Remove thought"
          className="remove-thght"
          onClick={handleRemove}
        >
          &times;
        </button>
        <div className="text">{thought.text}</div>
      </li>
    </div>
    </>
  )
}

export default Thoughts