import { useState } from "react"

export default function Oppgave3() {

    const [inputText, setInputText] = useState("")
    const [nasjonalitet, setNasjonalitet] = useState("unknown")
    const Nasjonalitet = inputText.toUpperCase();
    
    function handleChange(event) {
        setInputText(event.target.value)
        console.log(event.target.value)
    }

      function SjekkFunction() {
          if (inputText == 'n') {
            setNasjonalitet('norsk')
          }
          else if (inputText == 's') {
            setNasjonalitet('svensk')
          }

          else if (inputText == 'd') {
            setNasjonalitet('dansk')
          }

          else {
            setNasjonalitet('unknown')
          }
      }

    return (
      <div class="Oppgave">
            <h2>Oppgave 3 </h2>
        <label>Nasjonaliet</label>
        <input type="text" value={inputText} onChange={handleChange}/>
        <input type="submit" value="Sjekk nasjonalitet" onClick={SjekkFunction}/>
        <p>Du har {nasjonalitet} nasjonalitet</p>

      </div>
  
    )
  
  }

 