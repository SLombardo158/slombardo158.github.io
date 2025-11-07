export default function Footer() {
    return (
        <footer className="bg-gray-100 text-center py-6 mt-12">
            <p className="text-gray-600">
                © {new Date().getFullYear()} Shannon Lombardo |{" "}
                <a
                    href="https://github.com/SLombardo158"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                >
                    GitHub
                </a>
            </p>
        </footer>
    );
}
