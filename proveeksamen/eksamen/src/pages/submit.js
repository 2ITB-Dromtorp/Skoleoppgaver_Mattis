import React, { useContext, useState } from 'react';
import { TicketsContext } from '../context';


// TicketSystem-komponenten representerer hovedsystemet for billetthåndtering
const TicketSystem = () => {
  // Tilstand for å håndtere listen over billetter og gjeldende problem-inndata
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [title, setTitle] = useState('');
  const [tickets, setTickets] = useContext(TicketsContext);
  const [problem, setProblem] = useState('');

  // Funksjon for å opprette en ny billett
  const createTicket = () => {
    // Generer en ny billett med en unik ID og 'Fixed' status
    const id = tickets.length + 1;
    setTickets([...tickets, { id, problem, status: 'Ikke under behandling', name, email, phone, title }]);
    // Tøm inntastingsfeltene etter å ha opprettet en billett
    setProblem('');
    setName('');
    setEmail('');
    setPhone('');
    setTitle('');
    console.log(`Ticket created with ID: ${id}, Problem: ${problem}, Status: Ikke under behandling`);
  };

  return (
    <>
      <h1> Send inn en sak</h1>
      <form id="ticket_form" onSubmit={(e) => {
        e.preventDefault()
        createTicket();
      }}>
        <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Navn" />
        <input type="text" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="text" required value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Tlf" />
        <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Tittel" />
        <textarea id='issue' required value={problem} onChange={(e) => setProblem(e.target.value)} placeholder="Skriv problemet ditt her!" ></textarea>
        <button className='create'>Lagre svar</button>
      </form>
    </>
  );
};


// Eksporter TicketSystem-komponenten som standard eksport
export default TicketSystem;