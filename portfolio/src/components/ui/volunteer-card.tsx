import { useState } from "react";

type VolunteeringCardProps = {
    org: string;
    positions: string;
    desc: string;
    images: string[];
    folder: string;
};

export function VolunteerCard({ org, positions, desc, images, folder }: VolunteeringCardProps) {
    const [currentIndex, setCurrentIndex] = useState(-1); // -1 = front
    const [isFlipping, setIsFlipping] = useState(false);

    const handleClick = () => {
        setIsFlipping(true);
        setTimeout(() => {
            setCurrentIndex(prev => {
                const next = prev + 1;
                return next > images.length - 1 ? -1 : next;
            });
            setIsFlipping(false);
        }, 300); // half of transition duration
    };

    const isFront = currentIndex === -1;

    return (
        <div
            className="card cursor-pointer perspective"
            onClick={handleClick}
            style={{ height: "300px", position: "relative" }}
        >
            <div
                className={`flip-card-inner ${isFlipping ? "rotate-y-180" : ""}`}
                style={{ height: "100%", width: "100%", display: "flex", flexDirection: "column" }}
            >
                {/* Front Side */}
                {isFront && (
                    <div className="card-front p-6 justify-between" style={{ height: "100%", zIndex: 2 }}>
                        <div>
                            <h3 className="text-2xl font-semibold">{org}</h3>
                            <p className="muted" style={{ whiteSpace: "pre-line" }}>{positions}</p>
                            <p className="mt-2 muted">{desc}</p>
                        </div>
                    </div>
                )}

                {/* Back Side */}
                {!isFront && (
                    <div
                        className="card-back"
                        style={{
                            height: "100%",
                            width: "100%",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            overflow: "hidden",
                            borderRadius: "16px",
                            zIndex: 1,
                        }}
                    >
                        <img
                            src={`/volunteering/${folder}/${images[currentIndex]}.png`}
                            alt={`${org} image ${currentIndex + 1}`}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                transform: "rotateY(0deg)",
                            }}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
