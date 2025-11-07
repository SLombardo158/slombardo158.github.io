import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const skills = [
    "C++", "Python", "JavaScript", "React.js", "FastAPI", "Unity",
    "SQL", "Postgres", "GitHub", "Agile/Scrum", "Linux", "Robotics"
];

export default function Home() {
    const navigate = useNavigate();

    const experience = [
        {
            title: "Software Developer",
            company: "Adaptive Construction Solutions",
            date: "Jan 2025 – Present",
            desc: [
                "Optimized backend workflows, improving data efficiency and reliability.",
                "Built a back pay calculator automating payroll corrections.",
                "Created dynamic financial reports enhancing decision-making."
            ],
        },
        {
            title: "Founding Software Engineer",
            company: "Tempest Droneworx",
            date: "Jul 2023 – Jan 2025",
            desc: [
                "Developed Harbinger, a 3D real-time map visualization securing $5M+ in funding.",
                "Improved Unity memory efficiency by 50%, enabling 2,900 simultaneous cameras.",
                "Led 5 software flight demos (FAA, military) and mentored new developers."
            ],
        },
        {
            title: "Software Engineering Intern",
            company: "Micro Focus",
            date: "Feb 2021 – Sept 2022",
            desc: [
                "Built SQL + Java-based identity management reports.",
                "Developed for Oracle, Postgres, and MSSQL using Agile methodologies."
            ],
        }
    ];

    const projects = [
        {
            title: "Visualization Research",
            tech: "React, JavaScript",
            desc: "Improved a 3D web visualization framework for UH’s CS Department.",
        },
        {
            title: "CodeRED Hackathon - Rover",
            tech: "C++, JavaScript",
            desc: "1st Place at LyondellBasell track. Built a rover simulation environment.",
        },
        {
            title: "Trials of Movaria",
            tech: "Unity, C#",
            desc: "Led a 7-person team to build a full 2D game with AI and custom art.",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 text-gray-100">

            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center text-center py-32 px-6">
                <motion.h1
                    className="text-5xl md:text-6xl font-bold mb-4"
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Shannon Lombardo
                </motion.h1>
                <motion.p
                    className="text-xl text-gray-400 max-w-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    Software Engineer passionate about building efficient, creative, and impactful systems.
                </motion.p>
                <div className="mt-6 flex gap-4">
                    <Button>View Resume</Button>
                    <Button variant="outline">Contact Me</Button>
                </div>
            </section>

            {/* Skills */}
            <section className="max-w-5xl mx-auto px-6 py-16">
                <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
                    {skills.map(skill => (
                        <motion.div
                            key={skill}
                            whileHover={{ scale: 1.1 }}
                            className="bg-gray-800 rounded-2xl p-3 shadow hover:bg-gray-700 transition"
                        >
                            {skill}
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Experience */}
            <section className="max-w-5xl mx-auto px-6 py-16">
                <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>

                {experience.map((job, idx) => (
                    <Card key={idx} className="mb-6">
                        <CardContent className="p-6">
                            <h3 className="text-2xl font-semibold">{job.title}</h3>
                            <p className="text-gray-400">{job.company} • {job.date}</p>
                            <ul className="list-disc list-inside mt-3 text-gray-300">
                                {job.desc.map((line, i) => (
                                    <li key={i}>{line}</li>
                                ))}
                            </ul>
                            <Button onClick={() => navigate("/experience")}>See More...</Button>
                        </CardContent>
                    </Card>
                ))}
            </section>

            {/* Projects */}
            <section className="max-w-5xl mx-auto px-6 py-16">
                <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {projects.map(proj => (
                        <Card key={proj.title}>
                            <CardContent className="p-6">
                                <h3 className="text-2xl font-semibold">{proj.title}</h3>
                                <p className="text-gray-400">{proj.tech}</p>
                                <p className="mt-2 text-gray-300">{proj.desc}</p>
                                <Button onClick={() => navigate("/projects")}>See More...</Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Education */}
            <section className="max-w-4xl mx-auto px-6 py-16 text-center">
                <h2 className="text-3xl font-bold mb-6">Education</h2>
                <p className="text-lg font-semibold">University of Houston</p>
                <p className="text-gray-400">B.S. Computer Science, Math Minor - May 2023</p>
                <p className="text-gray-400 mt-2">
                    GPA: 3.25 / 4.0 | 1st Place at CodeRED 2022 | Academic Excellence Scholarship
                </p>
                <Button onClick={() => navigate("/education")}>See More...</Button>
            </section>

            <footer className="text-center text-gray-500 py-8 text-sm">
                © 2025 Shannon Lombardo | Built with React + Tailwind
            </footer>
        </div>
    );
}
