
import React, { useEffect, useRef, useState } from 'react';

interface CameraViewProps {
    onClose: () => void;
}

const CameraView: React.FC<CameraViewProps> = ({ onClose }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let stream: MediaStream | null = null;
        
        const startCamera = async () => {
            try {
                if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                    stream = await navigator.mediaDevices.getUserMedia({ 
                        video: { facingMode: 'environment' } 
                    });
                    if (videoRef.current) {
                        videoRef.current.srcObject = stream;
                    }
                } else {
                    setError("Seu navegador não suporta acesso à câmera.");
                }
            } catch (err) {
                console.error("Erro ao acessar a câmera:", err);
                if (err instanceof Error) {
                    if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
                        setError("A permissão para acessar a câmera foi negada. Por favor, habilite nas configurações do seu navegador.");
                    } else {
                        setError("Não foi possível acessar a câmera. Tente novamente.");
                    }
                } else {
                    setError("Ocorreu um erro desconhecido ao tentar acessar a câmera.");
                }
            }
        };

        startCamera();

        return () => {
            if (stream) {
                stream.getTracks().forEach(track => track.stop());
            }
        };
    }, []);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center z-50 p-4">
            <div className="relative w-full max-w-2xl bg-gray-800 rounded-lg shadow-2xl overflow-hidden">
                <div className="absolute top-2 right-2 z-10">
                    <button
                        onClick={onClose}
                        className="w-10 h-10 bg-red-600 hover:bg-red-500 text-white rounded-full flex items-center justify-center transition-colors duration-200"
                        aria-label="Fechar Câmera"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {error ? (
                    <div className="p-8 text-center text-red-400">
                        <h3 className="text-xl font-bold mb-2">Erro de Câmera</h3>
                        <p>{error}</p>
                    </div>
                ) : (
                    <div className="relative w-full" style={{ paddingBottom: '75%' /* 4:3 Aspect Ratio */ }}>
                        <video
                            ref={videoRef}
                            autoPlay
                            playsInline
                            className="absolute top-0 left-0 w-full h-full object-cover"
                        ></video>
                         <div className="absolute inset-0 border-4 border-dashed border-cyan-400 rounded-lg" style={{ margin: '10%' }}></div>
                    </div>
                )}
                
                <div className="p-4 bg-gray-900 text-center">
                    <p className="text-gray-300">Aponte a câmera para o QR Code</p>
                </div>
            </div>
        </div>
    );
};

export default CameraView;
