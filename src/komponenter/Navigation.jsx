import { NavLink } from "react-router-dom";

export default function Navigation() {

    return (
        <nav>
            <NavLink to="/">Forside</NavLink>
            <NavLink to="/produkt">Produkt</NavLink>
            <NavLink to="/omos">Om os</NavLink>
            <NavLink to="/kontakt">Kontakt</NavLink>
        </nav>
    )
}