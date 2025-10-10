import { projects } from "../data/projects";
import { motion } from "framer-motion";


export default function ProjectsSpotlight() {
    return (
        <section id="projects" className="container" style={{ marginTop: 24 }}>
            <h2>Projects</h2>
            <div className="spotlight">
                {projects.map((p, i) => (
                    <motion.article key={p.id} className="card" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .05 }}>
                        <h3 style={{ marginTop: 0 }}>{p.title}</h3>
                        <p className="muted">{p.blurb}</p>
                        <ul style={{ display: 'flex', gap: 8, flexWrap: 'wrap', padding: 0, listStyle: 'none', marginTop: 12 }}>
                            {p.stack.map(s => <li key={s} className="tech-chip">{s}</li>)}
                        </ul>
                        {p.href && <a className="btn secondary" style={{ marginTop: 12 }} href={p.href} target="_blank">View</a>}
                    </motion.article>
                ))}
            </div>
        </section>
    );
}