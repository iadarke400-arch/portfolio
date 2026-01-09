import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useVelocity, useTransform } from 'framer-motion';
import './Cursor.css';

const Cursor = () => {
    const [isHovered, setIsHovered] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const [particles, setParticles] = useState([]);
    const lastSpawn = React.useRef({ x: 0, y: 0, time: 0 });

    useEffect(() => {
        const moveCursor = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);

            // Particle Spawning Logic
            const now = Date.now();
            const dist = Math.sqrt(Math.pow(e.clientX - lastSpawn.current.x, 2) + Math.pow(e.clientY - lastSpawn.current.y, 2));

            // Spawn particles if moved enough distance (e.g., 30px) and sufficient time passed (throttle)
            if (dist > 30 && now - lastSpawn.current.time > 50) {
                lastSpawn.current = { x: e.clientX, y: e.clientY, time: now };

                // Spawn 1-3 particles
                const count = Math.floor(Math.random() * 3) + 1;
                const newParticles = [];
                for (let i = 0; i < count; i++) {
                    newParticles.push({
                        id: Date.now() + i,
                        x: e.clientX,
                        y: e.clientY,
                        tx: (Math.random() - 0.5) * 60, // Random X spread
                        ty: (Math.random() - 0.5) * 60, // Random Y spread
                        scale: Math.random() * 0.5 + 0.5, // Random size
                    });
                }

                setParticles(prev => [...prev, ...newParticles]);

                // Cleanup particles after animation
                setTimeout(() => {
                    setParticles(prev => prev.filter(p => p.id < Date.now()));
                }, 1000);
            }
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [mouseX, mouseY]);

    return (
        <>
            {/* Particles */}
            {particles.map(p => (
                <div
                    key={p.id}
                    className="cursor-particle"
                    style={{
                        left: p.x,
                        top: p.y,
                        '--tx': `${p.tx}px`,
                        '--ty': `${p.ty}px`,
                        transform: `scale(${p.scale})`
                    }}
                />
            ))}

            {/* Tiny solid dot for precise pointer */}
            <motion.div
                className="cursor-dot-center"
                style={{ translateX: mouseX, translateY: mouseY }}
            />
        </>
    );
};

export default Cursor;
