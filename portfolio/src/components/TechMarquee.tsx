const tech = ["C# .NET", "ASP.NET Core", "EF Core", "Azure", "SQL", "React", "TypeScript", "Vite"];


export default function TechMarquee() {
    return (
        <section className="container" aria-label="Tech I use" style={{ marginTop: 6 }}>
            <div className="panel">
                <div className="tech-row" role="list">
                    {tech.map(t => <div className="tech-chip" role="listitem" key={t}>{t}</div>)}
                </div>
            </div>
        </section>
    );
}