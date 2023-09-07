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
        <button className="btnup" onClick={btnup}><img src="images/arrow_up.png" alt="buttondown" width="100px"/></button>

        <p>{count}</p>

        <button className="btndown" onClick={btndown}><img src="images/arrow_down.png" alt="buttonup" width="100px"/></button>

      
        

    </div>
    );

}
