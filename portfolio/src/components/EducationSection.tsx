import "../assets/css/educationsection.css";

export function EducationSection() {
    return (
        <section className="education-section">
            <div className="education-text-wrapper">
                <h2 className="text-3xl font-bold mb-4">Education</h2>
                <p className="font-semibold">University of Houston</p>
                <p className="muted">B.S. Computer Science, Math Minor - May 2023</p>
                <p className="muted mt-2">
                    GPA: 3.25 / 4.0 • 1st Place at CodeRED 2022 • Academic Excellence Scholarship
                </p>
            </div>

            <img src="/Go-Coogs.jpg" alt="University of Houston" className="education-image" />
        </section>
    );
}
