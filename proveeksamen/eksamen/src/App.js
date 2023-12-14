import React, { useState } from 'react';
import './App.css'; // Importer CSS-filen
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TicketSystem from './pages/tickets';
import Submit from './pages/submit';
import Nav from './pages/nav';
import { TicketsContext } from './context';

export default function App() {
    const [tickets, setTickets] = useState([]);
    return (
        <TicketsContext.Provider value={[tickets, setTickets]}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Nav />}>
                        <Route index element={<Submit />} />
                        <Route path="tickets" element={<TicketSystem />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </TicketsContext.Provider>
    );
}