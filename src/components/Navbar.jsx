import { Link } from "react-router-dom"

export default function Navbar(){
    return(
        <header className="header">
            <Link to="/">
                <img src={'../img/mylogo_white.png'} alt="Logo" />
            </Link>
            <ul className="nav-menu">
                <li><Link to="/"><h2>Home</h2></Link></li>
                <li><Link to="/Project"><h2>Project</h2></Link></li>
                <li><Link to="/about"><h2>About</h2></Link></li>
                <li><Link to="/contact"><h2>Contact</h2></Link></li>
            </ul>
        </header>
    )
}