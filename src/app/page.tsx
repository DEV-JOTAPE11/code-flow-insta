'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

import Cost from '../../components/Cost';
import Course from '../../components/Course';
import styles from '../../styles/home.module.scss';

function HomeContent() {
    const searchParams = useSearchParams();

    // If you want the whole query string (e.g. "curso=abc&x=1") like you had before:
    const queryParams = searchParams?.toString() || 'curso';

    // If you actually want a specific param, do this instead:
    // const curso = searchParams.get('curso') ?? 'curso';

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <div className={styles.logoSection}>
                    <img src="/logo.png" alt="Code Flow" />
                </div>

                <div className={styles.cards}>
                    <Course urlParams={queryParams} />
                    <Cost />
                </div>

                <div className={styles.footer}>
                    <img src="/logo.png" alt="Code Flow" />
                </div>
            </div>
        </section>
    );
}

export default function Home() {
    return (
        <Suspense>
            <HomeContent />
        </Suspense>
    );
}
