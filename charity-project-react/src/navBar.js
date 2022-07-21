export default function NavBar(){


    return(
        <nav className={"nav"}>
            <a href={"/"} className={"title"}>Miejsca Pamięci <span role={"img"} aria-label={"znicz"}>🪔</span></a>
            <ul>
                <li>
                    <a href={"/"}>Sign in</a>
                </li>
            </ul>
        </nav>
    );
}



