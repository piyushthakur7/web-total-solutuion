'use client';

import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.cjs';

// Particle Cloud Component
const ParticleCloud = (props: any) => {
    const ref = useRef<any>();
    const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }));

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#3b82f6" // Blue-500
                    size={0.005}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.8}
                />
            </Points>
        </group>
    );
};

// Connections/Network Component (Abstract Shapes)
function Network() {
    const ref = useRef<any>();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (ref.current) {
            ref.current.rotation.z = t * 0.1;
            ref.current.rotation.y = Math.sin(t * 0.2) * 0.2;
        }
    });

    // Generating some random nodes connected by lines would be complex to code from scratch without extra libs 
    // so we'll stick to a "Cyberpunk" style geometric floating object or "Tech Sphere".

    return (
        <group ref={ref}>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                <mesh>
                    <icosahedronGeometry args={[1, 1]} />
                    <meshBasicMaterial color="#3b82f6" wireframe transparent opacity={0.3} />
                </mesh>
                <mesh scale={0.5}>
                    <icosahedronGeometry args={[1, 0]} />
                    <meshBasicMaterial color="#06b6d4" wireframe transparent opacity={0.5} />
                </mesh>
            </Float>
        </group>
    )
}

const ThreeScene: React.FC = () => {
    return (
        <div className="absolute inset-0 z-0 opacity-60">
            <Canvas camera={{ position: [0, 0, 3] }}>
                <ambientLight intensity={0.5} />
                <ParticleCloud />
                <Network />
            </Canvas>
        </div>
    )
}

// Need to import useState from react, it was missing in the top import


export default ThreeScene;
