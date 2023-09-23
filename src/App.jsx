import { useState } from "react"
import AddThoughtForm from "./components/AddThoughtForm"
import Thoughts from "./components/Thoughts"
import { generateId,getNewExpirationTime } from "./components/utilities"

function App() {

  const [thoughts,setThoughts] = useState([
    {
      id: generateId(),
      text: 'This is a place for your passing thoughts.',
      expiresAt: getNewExpirationTime(),
    },
    {
      id: generateId(),
      text: "They'll be removed after 15 seconds.",
      expiresAt: getNewExpirationTime(),
    },
  ])

  const addThought = (thought) =>{
    setThoughts(prev=>[...prev,thought])
  }

  const removeThought = (id) =>{
    setThoughts(thoughts=>thoughts.filter(thought=>thought.id!==id))
  }

  return (
    <>
      <header>
        <h1>Passing Thought</h1>
      </header>
      <main>
        <AddThoughtForm addThought={addThought} />
        <ul>
          {thoughts.map((thought)=>(
            
            <Thoughts key={thought.id} removeThought={removeThought} thought={thought} />
          
          ))}
        </ul>
      </main>
    </>
  )
}

export default App
