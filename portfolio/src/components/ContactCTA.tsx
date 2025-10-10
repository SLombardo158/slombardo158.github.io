export default function ContactCTA() {
    return (
        <section id="contact" className="container" style={{ marginTop: 28, marginBottom: 24 }}>
            <div className="panel" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
                <div>
                    <h3 style={{ margin: '6px 0' }}>Let's work together</h3>
                    <p className="muted" style={{ margin: 0 }}>Email me or find me on LinkedIn/GitHub.</p>
                </div>
                <div style={{ display: 'flex', gap: 10 }}>
                    <a className="btn" href="www.linkedin.com/in/svlombardo">LinkedIn</a>
                    <a className="btn secondary" href="mailto:shannonvlombardo@example.com">Email</a>
                    <a className="btn secondary" href="https://github.com/SLombardo158" target="_blank">GitHub</a>
                </div>
            </div>
        </section>
    );
}