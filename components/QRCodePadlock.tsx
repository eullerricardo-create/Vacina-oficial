
import React from 'react';

interface QRCodePadlockProps {
    className?: string;
}

const QRCodePadlock: React.FC<QRCodePadlockProps> = ({ className }) => {
    const dots = [];
    const dotSize = 2.5;
    const spacing = 5;
    const gridSize = 10;

    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            // Pseudo-randomly decide if a dot should be shown to mimic a QR code
            if ((i * j + i + j * 3) % 4 !== 0) {
                 dots.push(
                    <circle
                        key={`${i}-${j}`}
                        cx={25 + i * spacing}
                        cy={50 + j * spacing}
                        r={dotSize / 2}
                        className="fill-current"
                    />
                );
            }
        }
    }
    
    // Corner markers
    const markers = [
        { x: 25, y: 50, w: 12 },
        { x: 70, y: 50, w: 12 },
        { x: 25, y: 95, w: 12 },
    ];


    return (
        <svg
            viewBox="0 0 100 125"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
        >
            <g className="text-gray-700">
                <path d="M82.5,45 V27.5 C82.5,12.3 70.2,0 55,0 H45 C29.8,0 17.5,12.3 17.5,27.5 V45 H10 V110 H90 V45 H82.5 Z M27.5,27.5 C27.5,17.9 35.4,10 45,10 H55 C64.6,10 72.5,17.9 72.5,27.5 V45 H27.5 V27.5 Z" 
                className="fill-current" />
            </g>
            <g className="text-cyan-400">
                {markers.map((m, i) => (
                    <rect key={i} x={m.x} y={m.y} width={m.w} height={m.w} rx="2" ry="2" fill="none" stroke="currentColor" strokeWidth="2.5" />
                ))}
                {dots}
            </g>
        </svg>
    );
};

export default QRCodePadlock;
