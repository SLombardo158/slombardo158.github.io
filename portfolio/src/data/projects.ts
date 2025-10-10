export type Project = {
    id: number;
    title: string;
    blurb: string;
    stack: string[];
    href?: string;
};


export const projects: Project[] = [
    { id: 1, title: "Drone Telemetry Visualizer", blurb: "Real-time multi-UAS map with alerts and playback.", stack: ["Python", "Unity", "C#", "SQL", "TCP", "UDP", "FastAPI"], href: "#" },
    { id: 2, title: "Setwave - Music Discovery Tool", blurb: "Audit KPIs, scheduled reports, role-based access.", stack: ["C#", "ASP.NET", "EF Core", "SQL", "Azure"], href: "#" },
    { id: 3, title: "FCLWebVis - Data Visualization Framework", blurb: "Met one-on-one with leading Professor about vector manipulation and code base", stack: ["React", "Vector Math"], href: "https://www2.cs.uh.edu/~chengu/Publications/3DFlowVis/FCLWebVis_VDA23.pdf" } //other github href = https://github.com/MangoLion/FCLWebVis
];