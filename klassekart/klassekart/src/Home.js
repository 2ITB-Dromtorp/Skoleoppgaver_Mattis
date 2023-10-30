import { useState } from 'react';
import './App.css';
import Elev from './Elev';
import profiles from "./profiles.js"

export default function Home() {

  const [update, setUpdate] = useState(true)

  function RandomizeList() {

    let currentIndex = profiles.elever.length,  randomIndex;

    while (currentIndex > 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--
  
      [profiles.elever[currentIndex], profiles.elever[randomIndex]] = [
        profiles.elever[randomIndex], profiles.elever[currentIndex]]
    }
    console.log(profiles.elever)
    setUpdate(!update)
  }

    return (

        <div className="container">

        <div className='leftside'>

            <div className='box'>

              <div className='sitteplasser'>
                <Elev name={profiles.elever[0].navn}/>
                <Elev name={profiles.elever[1].navn}/>
              </div>

              <div className='sitteplasser'> 
                <Elev name={profiles.elever[2].navn}/>
              </div>

              <div className='sitteplasser'> 
                <Elev name={profiles.elever[3].navn}/>
                <Elev name={profiles.elever[4].navn}/>
              </div>

            </div>
          </div>
            

        <div className='rightside'>

        <div className='box'>

            <div className='sitteplasser'> 
            <Elev name={profiles.elever[5].navn}/>
            <Elev name={profiles.elever[6].navn}/>
            <Elev name={profiles.elever[7].navn}/>
              </div>

              <div className='sitteplasser'> 
              <Elev name={profiles.elever[8].navn}/>
              <Elev name={profiles.elever[9].navn}/>
              <Elev name={profiles.elever[10].navn}/>
              </div>

              <div className='sitteplasser'> 
              <Elev name={profiles.elever[11].navn}/>
              <Elev name={profiles.elever[12].navn}/>
              <Elev name={profiles.elever[13].navn}/>
              </div>
            
          </div>

          </div>

          <button onClick={() => RandomizeList()}>Random</button>
        </div>
    )
}