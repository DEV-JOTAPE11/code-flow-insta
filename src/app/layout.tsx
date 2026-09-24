import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '../../styles/globals.scss';
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from '../lib/site';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: SITE_TITLE,
        template: `%s | ${SITE_NAME}`,
    },
    description: SITE_DESCRIPTION,
    applicationName: SITE_NAME,
    keywords: [
        'Code Flow',
        'links Code Flow',
        'link na bio',
        'página de links',
        'curso de criação de sites',
        'aprender a criar sites',
        'inteligência artificial',
        'IA para sites',
        'networking',
        'orçamento de site',
        'criação de sites',
        'desenvolvimento web',
    ],
    authors: [{ name: SITE_NAME }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    category: 'technology',
    alternates: { canonical: '/' },
    openGraph: {
        type: 'website',
        locale: 'pt_BR',
        url: '/',
        siteName: SITE_NAME,
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
    },
    twitter: {
        card: 'summary_large_image',
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    formatDetection: { telephone: false },
};

export const viewport: Viewport = {
    themeColor: '#000000',
    colorScheme: 'dark',
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'Organization',
            '@id': `${SITE_URL}/#organization`,
            name: SITE_NAME,
            url: SITE_URL,
            logo: `${SITE_URL}/logo.png`,
            description: SITE_DESCRIPTION,
            contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'sales',
                telephone: '+55-38-99974-3350',
                availableLanguage: 'Portuguese',
            },
        },
        {
            '@type': 'WebPage',
            '@id': `${SITE_URL}/#webpage`,
            url: SITE_URL,
            name: SITE_TITLE,
            description: SITE_DESCRIPTION,
            inLanguage: 'pt-BR',
            about: { '@id': `${SITE_URL}/#organization` },
            publisher: { '@id': `${SITE_URL}/#organization` },
            mainEntity: {
                '@type': 'ItemList',
                name: 'Links oficiais da Code Flow',
                itemListElement: [
                    {
                        '@type': 'ListItem',
                        position: 1,
                        name: 'Grupo Code Flow: aprenda sites, IA e networking',
                        url: 'https://chat.whatsapp.com/F34hp0dZhxDFLKAiAR6vg0',
                    },
                    {
                        '@type': 'ListItem',
                        position: 2,
                        name: 'Solicitar orçamento de site',
                        url: 'https://wa.me/5538999743350',
                    },
                ],
            },
        },
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                {children}
            </body>
        </html>
    );
}
