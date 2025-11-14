import React, { useState } from 'react';
import Header from './components/Header';
import CameraView from './components/CameraView';

// SVG Icons for buttons
const QrCodeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M3 14h18M10 3v18M14 3v18" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h4v4H4zM16 4h4v4h-4zM4 16h4v4H4zM16 16h4v4h-4z" />
    </svg>
);

const AlertIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
);

export default function App() {
    const [isCameraOpen, setIsCameraOpen] = useState(false);

    const handleOpenCam = () => {
        setIsCameraOpen(true);
    };

    const handleCloseCam = () => {
        setIsCameraOpen(false);
    };

    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 font-sans flex flex-col items-center justify-between p-4 sm:p-6 md:p-8">
            <Header />

            <main className="flex-grow flex flex-col items-center justify-center w-full max-w-4xl text-center">
                <div className="w-full space-y-4 md:space-y-6 max-w-md">
                    <button
                        onClick={handleOpenCam}
                        className="w-full flex items-center justify-center text-lg font-bold bg-cyan-500 hover:bg-cyan-400 text-white py-4 px-6 rounded-lg shadow-lg shadow-cyan-500/50 transform hover:scale-105 transition-all duration-300 ease-in-out"
                    >
                        <QrCodeIcon />
                        Ler uma Vacina QR Code
                    </button>
                    
                    <button className="w-full text-lg font-bold bg-red-600 hover:bg-red-500 text-white py-4 px-6 rounded-lg shadow-lg shadow-red-600/50 transform hover:scale-105 transition-all duration-300 ease-in-out flex items-center justify-center">
                        <AlertIcon />
                        FUI ROUBADO
                    </button>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                        <button className="w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-5 rounded-lg transition-colors duration-200">
                            Eu tenho
                        </button>
                        <button className="w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-5 rounded-lg transition-colors duration-200">
                            Eu quero
                        </button>
                    </div>
                </div>
            </main>

            <div className="text-center my-6">
                <p className="text-yellow-400 font-semibold tracking-wider animate-pulse uppercase">site em construção</p>
                <p className="text-gray-400 mt-1 text-sm">O futuro chegou e vai te surpreender</p>
            </div>

            {isCameraOpen && <CameraView onClose={handleCloseCam} />}

            <footer className="w-full text-center mt-8 py-4 border-t border-gray-800">
                <div className="max-w-4xl mx-auto px-4">
                     <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} Vacina QR Antifurto. Todos os direitos reservados.
                     </p>
                     <div className="mt-2 space-x-4">
                         <a href="#" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                            Política de Privacidade
                         </a>
                         <span className="text-gray-600">|</span>
                         <a href="#" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                            Termos de Uso
                         </a>
                     </div>
                </div>
            </footer>
        </div>
    );
}