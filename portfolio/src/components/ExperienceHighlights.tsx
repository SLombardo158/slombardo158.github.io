import { experience } from "../data/experience";


export default function ExperienceHighlights() {
    const e = experience[0];
    if (!e) return null;
    return (
        <section id="experience" className="container" style={{ marginTop: 24 }}>
            <h2>Experience</h2>
            <div className="exp-grid">
                {e.bullets.map((b, i) => (
                    <article className="card" key={i}>{b}</article>
                ))}
            </div>
            <p className="muted" style={{ marginTop: 8 }}>{e.role} - {e.company} | {e.period}</p>
        </section>
    );
}