import { useState } from "react";
import northup from './images/arrow_up.png'
import northdown from './images/arrow_down.png'




export default function Numbercount() {
    
    const [count, setcount] = useState(0); 
    function btnup() {
        setcount(count + 1);
      }
    
      function btndown() {
        setcount(count - 1);
      }

   
    
    return (
    <div>
        <button className="btnup"></button>

        <p> </p>

        <button className="btndown">  </button>

        <img src={northdown} alt="buttondown"/>
        <img src={northup} alt="buttonup"/>

    </div>
    );

}
