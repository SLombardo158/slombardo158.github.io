export default function Projects() {
    return (
        <div className="p-8 text-white bg-gradient-to-b from-gray-900 to-black min-h-screen">
            <h1 className="text-4xl font-bold mb-8">Projects</h1>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold">Visualization Research with UH CS Department</h2>
                <p className="text-gray-400">JavaScript and React | Fall 2022 & Spring 2023</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Improved FCLWebVis – a cross-language web-based 3D visualization framework</li>
                    <li>Utilized JavaScript and React.JS to enhance client-side interface and user experience</li>
                    <li>Met weekly with the team to learn interpolation concepts and visualization algorithms</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold">CodeRED Hackathon – Rover</h2>
                <p className="text-gray-400">JavaScript and C++ | Fall 2022</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Won 1st place within LyondellBasell’s track</li>
                    <li>Created a simulated environment mimicking different zones in a field for rovers</li>
                    <li>Embedded environment on a website and built a foundation for automated capabilities</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold">2D Video Game – Trial’s of Movaria</h2>
                <p className="text-gray-400">Unity and C# | Fall 2022</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Led a team of 7 people to create a fully functional game within 3 months</li>
                    <li>Coded enemy and player AI, mapped sprite animations, and managed game states</li>
                    <li>Designed 4 playable characters, 2 bosses, 2 areas, and 4 small enemies from scratch (art and AI)</li>
                </ul>
            </section>

            <section className="mt-8">
                <p className="text-gray-400">GitHub: <a href="https://github.com/SLombardo158" className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">github.com/SLombardo158</a></p>
            </section>
        </div>
    );
}

