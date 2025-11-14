import React from 'react';
import QRCodePadlock from './QRCodePadlock';

const Header: React.FC = () => {
    return (
        <header className="w-full max-w-4xl text-center mb-8 md:mb-12">
            <div className="inline-flex flex-col items-center">
                 <QRCodePadlock className="w-24 h-24 md:w-28 md:h-28 text-cyan-400" />
                 <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-white mt-4">
                    Vacina QR Antifurto
                </h1>
                <p className="text-md sm:text-lg text-gray-400 mt-2">
                    Adesivo Inteligente / Proteção Moderna
                </p>
            </div>
        </header>
    );
};

export default Header;