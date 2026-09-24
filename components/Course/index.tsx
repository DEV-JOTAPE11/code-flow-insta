'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from './styles.module.scss';

interface CourseProps {
    urlParams: string;
}

const Course = ({ urlParams }: CourseProps) => {
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

        router.push(`https://www.herbertcarnauba.com.br/new-course?curso`);
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
                    router.push(`/new-course?${urlParams}`);
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
                    <img src="/newicon.png" alt="" />
                </div>
                <div className={styles.text}>
                    <h2>APRENDA TECNOLOGIA POR R$97!</h2>
                    <h5>
                        Nosso curso de programação mais completo e prático! Você
                        vai aprender tudo que você precisa para sair do zero
                        pagando apenas R$97 tendo acesso vitalício!
                    </h5>
                </div>
            </div>
        </section>
    );
};

export default Course;
