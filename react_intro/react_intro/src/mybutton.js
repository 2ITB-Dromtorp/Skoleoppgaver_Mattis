import './App.css';

function HelloWorld() {
  console.log('Welcome back!');
  alert('Welcome back!');
}

export default function MyButton() {
    return (
      <div>
        <h1>Welcome to my app</h1>
        <button className='MyButton' onClick={HelloWorld}>im a button</button>
      </div>
    );
  }