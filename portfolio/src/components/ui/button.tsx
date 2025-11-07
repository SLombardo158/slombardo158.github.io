import type { ReactNode } from "react";

type ButtonProps = {
    children: ReactNode;
    onClick?: () => void;
    variant?: "outline" | "default";
};

export function Button({ children, onClick, variant = "default" }: ButtonProps) {
    const base = "px-4 py-2 rounded-lg font-semibold transition";
    const styles =
        variant === "outline"
            ? "border border-gray-400 text-gray-200 hover:bg-gray-700"
            : "bg-blue-600 text-white hover:bg-blue-700";

    return (
        <button className={`${base} ${styles}`} onClick={onClick}>
            {children}
        </button>
    );
}

