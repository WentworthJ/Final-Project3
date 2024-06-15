import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import VariantButtonGroup from './components/buttonGroup'
import { Link } from "react-router-dom";
//importing images
import Places from './Images/Places.jpg';
import Characters from './Images/Characters.jpg';
import Items from './Images/Items.jpg';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <div>
        <h1>Welcome to my Website!</h1>
        <p>This is currently an under-construction website about a story set in the universe of the Dungeon Defenders video game series</p>
        <p>Due to the extreme lack of any lore besides the basic plot, I decided to write my own version of the story, adding details to the original while not contradicting anything.</p>
        <nav>
          <ul>
            <li>
              {/*Uses image in place of words to make the image a link*/}          
              <Link to="Places"><img src={Places} className="logo-medium" alt="Vite logo" /></Link>
              <Link to="Characters"> <img src={Characters} className="logo-medium" alt="Vite logo" /></Link>

              <Link to="Items"> <img src={Items} className="logo-medium" alt="Vite logo" /></Link>

              

            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}



export default App
