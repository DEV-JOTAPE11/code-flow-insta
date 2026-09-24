'use client';

import { useState } from 'react';
import styles from './styles.module.scss';

const Youtube = () => {
    const [lightPosition, setLightPosition] = useState({
        x: 0,
        y: 0,
        visible: false,
    });

    const scaleFactor = 1.05;

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        const overlaySize = 100;
        const { left, top } = event.currentTarget.getBoundingClientRect();
        const adjustedX = (event.clientX - left) / scaleFactor;
        const adjustedY = (event.clientY - top) / scaleFactor;

        setLightPosition({
            x: adjustedX - overlaySize,
            y: adjustedY - overlaySize,
            visible: true,
        });
    };

    const handleMouseLeave = () => {
        setLightPosition((prev) => ({
            ...prev,
            visible: false,
        }));
    };

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        window.open(
            'https://wa.me/5541999618149?text=Estou%20interessado%20em%20uma%20mentoria%20individual%20com%20O%20Rei%20dos%20Sites',
            '_blank'
        );
    };

    return (
        <section
            className={styles.container}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            role="link"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    window.open(
                        'https://wa.me/5541999618149?text=Estou%20interessado%20em%20uma%20mentoria%20individual%20com%20O%20Rei%20dos%20Sites',
                        '_blank'
                    );
                }
            }}
        >
            <div
                className={styles.lightEffect}
                style={{
                    background:
                        'radial-gradient(circle closest-side, rgba(255, 255, 255, 0.3), transparent)',
                    transform: `translate(${lightPosition.x}px, ${lightPosition.y}px)`,
                    opacity: lightPosition.visible ? 1 : 0,
                }}
            />
            <div className={styles.content}>
                <div className={styles.icon}>
                    <img src="/user.svg" alt="" />
                </div>
                <div className={styles.text}>
                    <h2>Seja meu mentorado individual!</h2>
                    <h5>
                        Aprenda como ganhar dinheiro de verdade com programação!
                    </h5>
                </div>
            </div>
        </section>
    );
};

export default Youtube;
