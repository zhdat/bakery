import {Link} from "react-router-dom";

export const Header = () => {
    return (
        <header className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">GD-Patisserie</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link to="/" className="hover:underline">Accueil</Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:underline">À propos</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:underline">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
