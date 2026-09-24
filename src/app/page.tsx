'use client';

import { MotionConfig } from 'motion/react';

import Cost from '../../components/Cost';
import Course from '../../components/Course';
import { CardReveal, FadeUp } from '../../components/motion-primitives';
import styles from '../../styles/home.module.scss';

export default function Home() {
    return (
        <MotionConfig reducedMotion="user">
            <main className={styles.container}>
                <div className={styles.content}>
                    <FadeUp className={styles.logoSection} delay={0.2}>
                        <h1 className={styles.title}>
                            <img
                                src="/logo.png"
                                alt="Code Flow — links oficiais: aprenda sites e IA ou solicite um orçamento"
                                width={1363}
                                height={282}
                            />
                        </h1>
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
                        <img src="/logo.png" alt="" width={1363} height={282} />
                    </FadeUp>
                </div>
            </main>
        </MotionConfig>
    );
}
