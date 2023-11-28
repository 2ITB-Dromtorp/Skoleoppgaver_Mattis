import { Link, Outlet } from "react-router-dom"
import { useContext } from "react";
import { UserContext } from "./context";

function Nav() {
    const [userData, setUserData] = useContext(UserContext);
    return (
        <nav id="top_nav">
            <Link id="home_link" to="/">
                <img id="home_link_icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Viken_v%C3%A5pen.svg/640px-Viken_v%C3%A5pen.svg.png"/>
            </Link>
            {userData !== undefined ? (
                <button className="fancy_button" onClick={(e) => {
                    setUserData();
                }}>
                    Logg ut
                </button>
            ) : (
                <>
                    <Link className="fancy_button" to="/loggin">Logg inn</Link>
                    <Link className="fancy_button" to="/registrerdeg">Registrer deg</Link>
                </>
            )}
        </nav >
    );
}

export default function Layout() {
    return (
        <>
            <Nav />
            <Outlet />
        </>
    );
}