import { useNavigate } from "react-router-dom";
import { VolunteerCard } from "../components/ui/volunteer-card";
import { EducationSection } from "../components/EducationSection";


export default function HomePage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-var(--bg) text-var(--text)">
            {/* Hero Section */}
            <section className="hero py-32 px-6 text-center">
                <h1 className="text-5xl md:text-6xl font-bold mb-4">Shannon Lombardo</h1>
                <p className="mb-6 muted max-w-2xl mx-auto">
                    Software Engineer passionate about building efficient, creative, and impactful systems.
                </p>
                <div className="flex justify-center gap-4">
                    <button className="btn" onClick={() => navigate("/resume")}>View Resume</button>
                    <button className="btn secondary" onClick={() => navigate("/contact")}>Contact Me</button>
                </div>
            </section>

            {/* Skills Section */}
            <section className="container py-16">
                <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
                <div className="tech-row w-full flex flex-wrap justify-center gap-4">
                    {[
                        "C++", "Python", "JavaScript", "React.js", "FastAPI", "Unity",
                        "SQL", "Postgres", "GitHub", "Agile/Scrum", "Linux", "Robotics", ".NET"
                    ].map(skill => (
                        <div key={skill} className="tech-chip">{skill}</div>
                    ))}
                </div>
            </section>

            {/* Experience Section */}
            <section className="container py-16">
                <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
                <div className="exp-grid w-full flex flex-col gap-6">
                    {[
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
                    ].map((job, idx) => (
                        <div key={idx} className="card w-full">
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold">{job.title}</h3>
                                <p className="muted">{job.company} • {job.date}</p>
                                <ul className="list-disc list-inside mt-3 muted">
                                    {job.desc.map((line, i) => (
                                        <li key={i}>{line}</li>
                                    ))}
                                </ul>
                                <button className="btn mt-4" onClick={() => navigate("/experience")}>See More...</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Projects Section */}
            <section className="container py-16">
                <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
                <div className="exp-grid w-full flex flex-col gap-6">
                    {[
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
                    ].map((proj, idx) => (
                        <div key={idx} className="card w-full">
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold">{proj.title}</h3>
                                <p className="muted">{proj.tech}</p>
                                <p className="mt-2 muted">{proj.desc}</p>
                                <button className="btn mt-4" onClick={() => navigate("/projects")}>See More...</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Volunteering Section */}
            <section className="container py-16">
                <h2 className="text-3xl font-bold mb-8 text-center">Volunteering</h2>
                <div className="exp-grid w-full flex flex-wrap gap-6 justify-center">
                    {[
                        {
                            org: "Phi Sigma Rho",
                            folder: "phi-sigma-rho",
                            positions: "Alumni - President\nCollegiate - Philanthropy Chair\nCollegiate - Recruitment Chair",
                            desc: "Organize Houston area events with STEM alumnae and raise money for collegiate scholarships.",
                            images: [
                                "LightTheNight",
                                "CatsBack-TriFold",
                                "TheBigClimb"
                            ],
                        },
                        {
                            org: "Cougarettes",
                            folder: "cougarettes",
                            positions: "Alumni - Mentor\nCollegiate - President\nCollegiate - She Codes Teacher",
                            desc: "Revitalized org from dying during Covid, now I mentor collegiate students in the org.",
                            images: [
                                "SheCodesProgramFinish",
                                "SheCodesGroupPhoto",
                                "CatsBack-DrRizk"
                            ],
                        },
                        {
                            org: "Civil Air Patrol",
                            folder: "civil-air-patrol",
                            positions: "Flight Sergeant, Promotions Officer, Color Guard, Public Affairs Officer",
                            desc: "Led a 10-person group in military drill/customs, mentored students.",
                            images: [
                                "O-Flight",
                                "ColorGuard",
                                "Encampment-PublicAffairs"
                            ],
                        },
                    ].map((vol, idx) => (
                        <VolunteerCard key={idx} {...vol} />
                    ))}
                </div>
            </section>



            {/* Education Section */}
            <EducationSection />


            <footer className="footer">© 2025 Shannon Lombardo * Built with React + Tailwind</footer>
        </div>
    );
}
