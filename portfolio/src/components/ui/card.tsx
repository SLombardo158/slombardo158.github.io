import type { ReactNode } from "react";

type CardProps = {
    children: ReactNode;
    className?: string;
};

export function Card({ children, className = "" }: CardProps) {
    return <div className={`bg-gray-800 border border-gray-700 rounded-2xl ${className}`}>{children}</div>;
}

export function CardContent({ children, className = "" }: CardProps) {
    return <div className={`p-6 ${className}`}>{children}</div>;
}
