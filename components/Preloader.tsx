'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const terminalLines = [
    '> Initializing core systems...',
    '> Loading modules...',
    '> npm install dependencies...',
    '> Optimizing build...',
    '> Starting development server...',
    '> Ready.'
];

const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
    const [lines, setLines] = useState<string[]>([]);
    const [currentLineIndex, setCurrentLineIndex] = useState(0);

    useEffect(() => {
        if (currentLineIndex < terminalLines.length) {
            const timeout = setTimeout(() => {
                setLines((prev) => [...prev, terminalLines[currentLineIndex]]);
                setCurrentLineIndex((prev) => prev + 1);
            }, 400 + Math.random() * 400); // Random delay for realism

            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => {
                onComplete();
            }, 800);
            return () => clearTimeout(timeout);
        }
    }, [currentLineIndex, onComplete]);

    return (
        <motion.div
            className="fixed inset-0 bg-black z-50 flex items-center justify-center font-mono text-green-400 p-8 overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.5 } }}
        >
            <div className="w-full max-w-2xl">
                <div className="mb-4 text-sm text-gray-500 border-b border-gray-800 pb-2">
                    user@dev-machine:~/projects/web-total-solution
                </div>
                <div className="space-y-2">
                    {lines.map((line, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <span className="text-blue-500 mr-2">$</span>
                            {line}
                        </motion.div>
                    ))}
                    <motion.div
                        className="w-3 h-5 bg-green-400 inline-block align-middle ml-2"
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default Preloader;
