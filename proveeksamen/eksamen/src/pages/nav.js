import { Link, Outlet } from "react-router-dom";

export default function Nav() {
    return (
        <>
            <nav>
                <Link to="/">Send inn ticket</Link>
                <Link to="/tickets">Se tickets</Link>
            </nav>
            <div className="ticket-system">
                <Outlet />
            </div>
            <footer>
                <p>Kontaktinformasjon:</p>
                <p>E-post: kontakt@example.com</p>
                <p>Telefon: +47 123 456 789</p>
            </footer>
        </>
    )
}