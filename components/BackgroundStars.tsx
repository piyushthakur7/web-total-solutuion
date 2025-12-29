'use client';

import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const Stars = () => {
    const ref = useRef<THREE.Points>(null!);

    const pointsCount = 4000; // Fixed count to avoid hydration mismatch

    const sphere = useMemo(() => {
        const points = [];
        for (let i = 0; i < pointsCount; i++) {
            const r = 1.2 + Math.random() * 1.5;
            const theta = Math.random() * 2 * Math.PI;
            const phi = Math.acos(2 * Math.random() - 1);
            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = r * Math.sin(phi) * Math.sin(theta);
            const z = r * Math.cos(phi);
            points.push(x, y, z);
        }
        return new Float32Array(points);
    }, [pointsCount]);

    useFrame(() => {
        if (ref.current) {
            ref.current.rotation.x -= 0.0005;
            ref.current.rotation.y -= 0.001;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled>
                <PointMaterial
                    transparent
                    color="#ffffff"
                    size={0.005}
                    sizeAttenuation
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

const BackgroundStars: React.FC = () => {
    return (
        <div className="absolute inset-0 z-0" aria-hidden="true">
            <Canvas camera={{ position: [0, 0, 2] }} dpr={[1, 2]}>
                <Suspense fallback={null}>
                    <Stars />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default BackgroundStars;
