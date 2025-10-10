import { Menu } from "lucide-react";


export default function Navbar() {
    return (
        <header className="nav">
            <div className="nav-inner">
                <a className="brand" href="/">Shannon Lombardo</a>
                <nav className="links">
                    <a href="#projects">Projects</a>
                    <a href="#experience">Experience</a>
                    <a href="#contact">Contact</a>
                </nav>
            </div>
        </header>
    );
}