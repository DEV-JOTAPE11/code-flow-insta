'use client';

import { motion } from 'motion/react';
import type { ReactNode } from 'react';

/** Easing padrão do motion do site. */
export const EASE = [0.22, 1, 0.36, 1] as const;

/** Easing mais longo e suave, com desaceleração prolongada no final. */
export const SOFT_EASE = [0.16, 1, 0.3, 1] as const;

type RevealProps = {
    children: ReactNode;
    className?: string;
    delay?: number;
};

/** Entrada discreta para logo e rodapé — sobe com leve desfoque. */
export function FadeUp({ children, className, delay = 0 }: RevealProps) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 22, filter: 'blur(14px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.6, delay, ease: SOFT_EASE }}
        >
            {children}
        </motion.div>
    );
}

/** Entrada mais pronunciada, para cards. */
export function CardReveal({ children, className, delay = 0 }: RevealProps) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 34, scale: 0.985, filter: 'blur(12px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.8, delay, ease: SOFT_EASE }}
        >
            {children}
        </motion.div>
    );
}
