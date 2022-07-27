import {Link} from "react-router-dom";

export default function NavBar(){


    return(
        <nav className={"nav"}>
            <Link to={"/"} className={"title"}>Miejsca Pamięci <span role={"img"} aria-label={"znicz"}>🪔</span></Link>
            <ul>
                <li>
                    <Link to={"/LogIn"}>Log in</Link>
                </li>
            </ul>
        </nav>
    );
}



