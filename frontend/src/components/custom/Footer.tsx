export const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-4 mt-8">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} GD-Patisserie. Tous droits réservés.</p>
                <div className="flex justify-center space-x-4 mt-2">
                    <a href="https://facebook.com" className="hover:text-gray-400">Facebook</a>
                    <a href="https://twitter.com" className="hover:text-gray-400">Twitter</a>
                    <a href="https://instagram.com" className="hover:text-gray-400">Instagram</a>
                </div>
            </div>
        </footer>
    );
};