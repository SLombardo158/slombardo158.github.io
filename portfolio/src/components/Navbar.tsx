import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const location = useLocation();

    const navItems = [
        { path: "/", label: "Home" },
        { path: "/experience", label: "Experience" },
        { path: "/projects", label: "Projects" },
        { path: "/skills", label: "Skills" },
        { path: "/about", label: "About" },
    ];

    return (
        <nav className="flex justify-between items-center px-6 py-4 bg-white shadow">
            <h1 className="text-2xl font-bold text-blue-600">Shannon Lombardo</h1>
            <div className="flex gap-6">
                {navItems.map((item) => (
                    <Link
                        key={item.path}
                        to={item.path}
                        className={`hover:text-blue-500 transition ${location.pathname === item.path ? "text-blue-600 font-semibold" : ""
                            }`}
                    >
                        {item.label}
                    </Link>
                ))}
            </div>
        </nav>
    );
}
