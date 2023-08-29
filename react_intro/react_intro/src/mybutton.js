import './App.css';

function HelloWorld() {
  console.log('Hello World!');
  alert('Hello World!');
}

export default function MyButton() {
    return (
      <div>
        <h1>Welcome to my app</h1>
        <button className='MyButton' onClick={HelloWorld}>im a button</button>
      </div>
    );
  }