import { useState } from "react";

export default function Player() {
  const [ name, setName ] = useState("")
  const [ isClicked, setIsClicked ] = useState(false)

  return (
    <section id="player">
      <h2>Welcome { isClicked ? name : `unknown entity` }</h2>
      <p>
        <input type="text" 
        onChange={ 
          e => {
            setName(e.target.value)
            setIsClicked(false)
          }
        } 
        value={name} />
        <button onClick={ e => setIsClicked(true) }>Set Name</button>
      </p>
    </section>
  );
}
