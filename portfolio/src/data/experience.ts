export type Experience = {
    company: string;
    role: string;
    period: string;
    bullets: string[];
};


export const experience: Experience[] = [
    {
        company: "ACS", role: "Backend Developer II", period: "Jan 2025-Present", bullets: [
            "Built async data pipelines on Azure Functions",
            "Optimized EF Core queries (42%)",
            "Built dashboards from scratch for internal teams"
        ]
    }
];