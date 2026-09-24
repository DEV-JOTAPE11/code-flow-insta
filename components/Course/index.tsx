'use client';

import { useState } from 'react';
import styles from './styles.module.scss';

const WHATSAPP_GROUP_URL =
    'https://chat.whatsapp.com/F34hp0dZhxDFLKAiAR6vg0?s=cl&p=i&mlu=0&ilr=4';

const Course = () => {

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

    const handleClick = async (e: React.MouseEvent) => {
        e.preventDefault();

        // Facebook Pixel
        if (typeof window !== 'undefined') {
            import('react-facebook-pixel')
                .then((module) => {
                    const ReactPixel = module.default;
                    ReactPixel.track('ViewContent', {
                        content_name: 'Curso',
                        value: 197.0,
                        currency: 'BRL',
                    });
                })
                .catch((err) =>
                    console.error('Failed to load React Facebook Pixel', err)
                );
        }

        window.location.href = WHATSAPP_GROUP_URL;
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
                    window.location.href = WHATSAPP_GROUP_URL;
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
                    <img src="/code-flow-symbol.png" alt="" />
                </div>
                <div className={styles.text}>
                    <h2>Clique aqui para aprender!</h2>
                    <h5>Sites, IA e networking</h5>
                </div>
            </div>
        </section>
    );
};

export default Course;
