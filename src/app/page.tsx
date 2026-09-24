'use client';

import { MotionConfig } from 'motion/react';

import Cost from '../../components/Cost';
import Course from '../../components/Course';
import { CardReveal, FadeUp } from '../../components/motion-primitives';
import styles from '../../styles/home.module.scss';

export default function Home() {
    return (
        <MotionConfig reducedMotion="user">
            <section className={styles.container}>
                <div className={styles.content}>
                    <FadeUp className={styles.logoSection} delay={0.2}>
                        <img src="/logo.png" alt="Code Flow" />
                    </FadeUp>

                    <div className={styles.cards}>
                        <CardReveal className={styles.cardItem} delay={0.55}>
                            <Course />
                        </CardReveal>
                        <CardReveal className={styles.cardItem} delay={0.85}>
                            <Cost />
                        </CardReveal>
                    </div>

                    <FadeUp className={styles.footer} delay={1.2}>
                        <img src="/logo.png" alt="Code Flow" />
                    </FadeUp>
                </div>
            </section>
        </MotionConfig>
    );
}
