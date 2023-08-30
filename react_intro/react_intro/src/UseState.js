export default function myapp() {
    return (
      <div>
        <MyButton />
        <MyButton />
      </div>
    );
  }
  
  function MyButton() {
    const [count, setCount] = useState(0);
  
    function handleClick() {
      setCount(count + 1);
    }
  
    return (
      <button onClick={handleClick}>
        Clicked {count} times
      </button>
    );
  }
  