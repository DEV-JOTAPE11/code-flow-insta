'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from './styles.module.scss';

const Cost = () => {
    const router = useRouter();

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
        setLightPosition((prev) => ({ ...prev, visible: false }));
    };

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        router.push('https://www.herbertcarnauba.com.br/organic/orcamento');
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
                if (e.key === 'Enter' || e.key === ' ')
                    router.push('/organic/orcamento');
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
                    <img src="/thinArrow.svg" alt="" />
                </div>
                <div className={styles.text}>
                    <h2>Realizar orçamento</h2>
                    <h5>
                        Solicite um orçamento para ter seu próprio site feito
                        pelo rei.
                    </h5>
                </div>
            </div>
        </section>
    );
};

export default Cost;
