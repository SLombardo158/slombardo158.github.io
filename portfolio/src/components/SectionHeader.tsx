export default function SectionHeader({ title }: { title: string }) {
    return (
        <h2 className="text-3xl font-bold text-center mb-4 border-b-2 border-blue-600 inline-block">
            {title}
        </h2>
    );
}
