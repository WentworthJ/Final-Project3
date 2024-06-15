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
        {/* Rendering Buttons */}
        <VariantButtonGroup buttonOne="CIS155" buttonTwo="CIS255" buttonThree="CIS210"></VariantButtonGroup>
        {/* Links to external sites with their respective logos */}
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div>
        <h1>Hello from the main page of the app!</h1>
        <p>Here are some examples of links to other pages</p>
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
