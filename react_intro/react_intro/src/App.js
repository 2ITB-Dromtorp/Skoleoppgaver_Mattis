import './App.css';
import MyButton from './mybutton'; 
import Profile from './ImageEx';
import {useState} from 'react'; 
import DigitalClock from './DigitalClock';
import Numbercount from './Numbercount';

function App() {
  

  return (


    <div className="App">
      <header className="App-header">


        <DigitalClock/>
        <Numbercount/>

      </header>
    </div>
  );
}

export default App;

