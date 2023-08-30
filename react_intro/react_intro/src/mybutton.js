import './App.css';
import { useState } from 'react';


export default function MyButton() {

function HelloWorld() {
  // console.log('Welcome back!');
 // alert('Welcome back!');
 setCount(count+1);
}

const [count, setCount] = useState(0)


    return (
      <div>
        <h1>Welcome to my app</h1>
        <button className='MyButton' onClick={HelloWorld}>Clicked {count} times</button>
      </div>
    );
  }