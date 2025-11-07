export default function Experience() {
    return (
        <div className="p-8 text-white bg-gradient-to-b from-gray-900 to-black min-h-screen">
            <h1 className="text-4xl font-bold mb-8">Experience</h1>

            {/* Adaptive Construction Solutions */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold">Software Developer</h2>
                <p className="text-gray-400">January 2025 – Present | Adaptive Construction Solutions - Houston, TX</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Optimized backend workflows, improving data efficiency and system reliability</li>
                    <li>Created dynamic reports that enhanced financial insights and decision-making</li>
                    <li>Built a back pay calculator that automated payroll corrections, reducing manual review times</li>
                </ul>
            </section>

            {/* Tempest Droneworx */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold">Founding Software Engineer</h2>
                <p className="text-gray-400">July 2023 – January 2025 | Tempest Droneworx - Houston, TX</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Developed Harbinger, a 3D real-time map visualization tool, from the MVP into its first demo, securing $5 million+ in funding</li>
                    <li>Improved memory management of the Unity build by over 50%, allowing software to process 2,900 cameras simultaneously over California</li>
                    <li>Successfully led 5 different software flight demos; 1 with the FAA, and 2 with military personnel</li>
                    <li>Senior Developer (March 2024) – helped manage projects and trained new developers</li>
                    <li>Utilized flight software to autonomously control 8 kinds of UAV body frames via TCP protocol</li>
                </ul>
            </section>

            {/* Micro Focus */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold">Software Engineering Intern</h2>
                <p className="text-gray-400">February 2021 – September 2022 | Micro Focus - Houston, TX</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Designed, developed, and tested user-friendly identity and access report queries using SQL and Java in Oracle, Postgres, and MSSQL databases</li>
                    <li>Planned and implemented features and associated use cases using Agile methodologies</li>
                </ul>
            </section>

            {/* Education */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold">Education</h2>
                <p className="text-gray-400">University of Houston, Houston TX – May 2023</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Bachelor of Science in Computer Science, Math Minor | GPA: 3.25/4.0</li>
                    <li>Relevant Coursework: Data Structures, Databases, Networks, Digital Image Processing</li>
                    <li>Organizations: Cougarettes President, Phi Sigma Rho Recruitment Director & Philanthropy Chair</li>
                    <li>Honors: 1st place at CodeRED 2022, Academic Excellence Scholarship, James Award</li>
                </ul>
            </section>

            {/* Projects */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold">Projects</h2>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>
                        <strong>Visualization Research with UH CS Department</strong> | JavaScript and React (Fall 2022 & Spring 2023)<br />
                        Improved FCLWebVis – a cross-language web-based 3D visualization framework. Utilized JavaScript and React.JS to enhance client-side interface and experiences. Met weekly with the team to learn interpolation concepts and visualization algorithms.
                    </li>
                    <li>
                        <strong>CodeRED Hackathon – Rover</strong> | JavaScript and C++ (Fall 2022)<br />
                        Won 1st place within LyondellBasell’s track. Created a simulated environment mimicking different zones in a field environment for rovers. Embedded environment on a website and built a foundation for automated capabilities.
                    </li>
                    <li>
                        <strong>2D Video Game – Trial’s of Movaria</strong >| Unity and C# (Fall 2022)<br />
                        Led a team of 7 people to create a fully functional game within 3 months. Coded enemy and player AI, mapped sprite animations, and managed game states. Designed 4 playable characters, 2 bosses, 2 areas, and 4 small enemies from scratch (art and AI).
                    </li>
                </ul>
            </section>

            {/* Skills */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold">Skills</h2>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Programming Languages: C++, Python, JavaScript, Java, C#, SQL, PHP, HTML, CSS</li>
                    <li>Frameworks & Tools: React.JS, Unity, ROS, OpenCV, MavSDK, FastAPI</li>
                    <li>Databases: Postgres, Oracle, MSSQL, PhpMyAdmin</li>
                    <li>Other: Agile/Scrum, GitHub, Command Line, Linux, Bash, Robotics, Flight Software</li>
                </ul>
            </section>
        </div>
    );
}
