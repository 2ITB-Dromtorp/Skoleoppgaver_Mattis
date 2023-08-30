import './App.css';
import MyButton from './mybutton'; 
import Profile from './ImageEx';
import {useState} from 'react'; 

function Uselist() { 
      
  const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
  ];
  
  
    const listItems = products.map(product =>
      <li
        key={product.id}
        style={{
          color: product.isFruit ? 'magenta' : 'magenta'
        }}
      >
        {product.title}
      </li>
    );
  
    return (
      <ul>{listItems}</ul>
    );

  }

function App() {

  let isLoggedIn;
  let content;
  isLoggedIn = true;

  if (isLoggedIn) {
    content = <MyButton />;
  } else {
    content = <Profile />;
  }
  

  return (


    <div className="App">
      <header className="App-header">
      
      <h1> React Intro </h1>
      
        {content}
        <Uselist />

      </header>
    </div>
  );
}

export default App;

