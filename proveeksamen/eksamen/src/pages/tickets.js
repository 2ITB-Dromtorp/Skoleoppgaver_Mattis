import React, { useContext} from 'react';
import { TicketsContext } from '../context';

// Ticket-komponenten representerer en individuell billett
const Ticket = ({ id, name, email, phone,title, problem, status, closeTicket, deleteTicket, handleTicket }) => (
    <div className="ticket">
        <h2>{`Problem: ${problem}`}</h2>
        <p>Navn: {name}</p>
        <p>Email: {email}</p>
        <p>Tlf: {phone}</p>
        <p>Tittel: {title}</p>
        <p>{`Status: ${status}`}</p>


        {/* Vis knapper basert på billettens status */}
        {(status === 'Ikke under behandling') && (
            <>
                <button onClick={() => handleTicket(id)}>Behandle sak</button>
            </>
        )}

        {(status === 'Under behandling') && (
            <>
                <button onClick={() => closeTicket(id)}>Lukk sak</button>
            </>
        )}

        {/* Knapp for å slette billetten */}
        <button onClick={() => deleteTicket(id)}>Slett sak</button>
    </div>
);

// TicketSystem-komponenten representerer hovedsystemet for billetthåndtering
const TicketSystem = () => {
    // Tilstand for å håndtere listen over billetter og gjeldende problem-inndata
    const [tickets, setTickets] = useContext(TicketsContext);

    // Funksjon for å lukke en billett
    const closeTicket = (id) => {
        // Oppdater statusen til den angitte billetten til 'Ferdig'
        setTickets(tickets.map(ticket => ticket.id === id ? { ...ticket, status: 'Ferdig' } : ticket));
        console.log(`Ticket with ID: ${id} has been closed.`);
    };

    // Funksjon for å slette en billett
    const deleteTicket = (id) => {
        // Fjern den angitte billetten fra listen
        setTickets(tickets.filter(ticket => ticket.id !== id));
        console.log(`Ticket with ID: ${id} has been deleted.`);
    };

    // Funksjon for å markere en billett som 'In Progress'
    const handleTicket = (id) => {
        // Oppdater statusen til den angitte billetten til 'In Progress'
        setTickets(tickets.map(ticket => ticket.id === id ? { ...ticket, status: 'Under behandling' } : ticket));
        console.log(`Ticket with ID: ${id} is in progress.`);
    };

    return (
        <>
            <h1>Saker</h1>
            {tickets.map(ticket => <Ticket key={ticket.id} {...ticket} closeTicket={closeTicket} deleteTicket={deleteTicket} handleTicket={handleTicket} />)}
        </>
    );
};

// Eksporter TicketSystem-komponenten som standard eksport
export default TicketSystem;