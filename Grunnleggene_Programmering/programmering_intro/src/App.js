import logo from './logo.svg';
import './App.css';

function Programmering() {
  return (
<div>
    <div class="Titlebar">Grunneleggende Programmering</div>
    <Oppgave1 />
    <Oppgave2 />
    <Oppgave3 />
    <Oppgave4 />
    

</div>
  )
}

function Oppgave1() {
  return (
    <div class="Oppgave">
      <p>Oppgave 1 </p>
      <p> A) Hva skriver du i javascript dersom du vil gi variabelen test verdien 8?
    Hvilken datatype er dette? 
     <br></br>Svar: let=8, dette er altså en datatype "number". </p>
    <p> B) Hva skriver du dersom du vil gi variabelen test verdien "testverdi"?
Hvilken datatype er dette?<br></br>
Svar: let test = "testverdi". Datatypen er en string! </p>
    <p> C) Hva skriver du dersom du vil regne ut 2 * 3 og sette resultatet inn i
variabelen produkt? <br></br>
Svar: let produkt = 2 * 3;
 </p>
    <p> D) Hva skriver du dersom du vil regne ut verdien av brøken 2/3 og sette
resultatet inn i variabelen broek?  <br></br>Svar: let broek = 2 / 3;
</p>
    <p> E) </p>
    
        </div>

  )

  
}

function Oppgave2() {
  return (
    <div class="Oppgave">
      <p>Oppgave 2 </p>
    <p> B) </p>
    <p> C) </p>
    <p> D) </p>
    </div>
  )
}


function Oppgave3() {
  return (
    <div class="Oppgave">
   <p>Oppgave 3 </p>
    <p> A) </p>
    <p> B) </p>
    </div>

  )

}


function Oppgave4() {
  return (
    <div class="Oppgave">
    <p>Oppgave 4 </p>
    <p> A) </p>
    </div>

  )

}

export default Programmering;