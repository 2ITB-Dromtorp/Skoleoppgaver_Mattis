import logo from './logo.svg';
import './App.css';



function ConsoleLog() {
  const data1 = document.getElementById("data1")
  const data2 = document.getElementById("data2")
  const data3 = document.getElementById("data3")
  const data4 = document.getElementById("data4")
  console.log(data1);
  console.log(data2);
  console.log(data3);
  console.log(data4);
}

function Oppgave1() {
  return (
    <div class="Oppgave">
    <p>Oppgave 1 </p>
    <p id="data1"> A) let=8, dette er altså en datatype "number". </p>
    <p id="data2"> B)  let test = "testverdi". Datatypen er en string! </p>
    <p id="data3"> C)  let produkt = 2 * 3;</p>
    <p id="data4"> D)  let broek = 2 / 3;</p>
    <p> E) Svaret er i consolelog</p>
    
    </div>

  )

  
}

function Oppgave2({lengde, bredde}) {
  const rektangel = lengde * bredde;
  const trekant = lengde * bredde / 2;
  return (
    <div class="Oppgave">
      <p>Oppgave 2 </p>
    <p> A) Areal til rektangel er {rektangel}m2  </p>
    <p> B) Areal til trekant er {trekant}m2</p>
    <p> C) </p>
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

function Programmering() {
  return (
<div>
    <div class="Titlebar">Grunneleggende Programmering</div>
    <Oppgave1 />
    <Oppgave2 lengde={8} bredde={8} />
    <Oppgave3 />
    <Oppgave4 />
    <ConsoleLog />
    

</div>
  )
}

export default Programmering;