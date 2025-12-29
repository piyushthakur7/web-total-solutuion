'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Particles = () => {
    const ref = useRef<THREE.Points>(null!);
    const count = 1000;

    // Use a stable random generation or generation inside useEffect to avoid mismatch
    // But simply using no-ssr dynamic import of this component solves the SSR mismatch issue entirely
    // because this component won't run on server.
    const positions = useMemo(() => {
        const arr = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            arr[i * 3] = (Math.random() - 0.5) * 8;
            arr[i * 3 + 1] = (Math.random() - 0.5) * 4;
            arr[i * 3 + 2] = (Math.random() - 0.5) * 8;
        }
        return arr;
    }, [count]);

    useFrame(({ clock }) => {
        if (ref.current) {
            const t = clock.getElapsedTime();
            ref.current.rotation.y = t * 0.1;
        }
    });

    return (
        <points ref={ref}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.05}
                color="#3b82f6"
                opacity={0.8}
                transparent
                depthWrite={false}
            />
        </points>
    );
};

const WorkParticles: React.FC = () => {
    return (
        <div className="absolute inset-0 z-0 opacity-70">
            <Canvas camera={{ position: [0, 0, 7], fov: 60 }}>
                <ambientLight intensity={0.4} />
                <pointLight position={[5, 5, 5]} intensity={1.2} />
                <Particles />
            </Canvas>
        </div>
    );
};

export default WorkParticles;
