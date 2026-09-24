import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';

export const alt = 'Code Flow — links oficiais: cursos de sites, IA e orçamentos';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
    const logo = await readFile(join(process.cwd(), 'public/logo.png'));
    const logoSrc = `data:image/png;base64,${logo.toString('base64')}`;

    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 48,
                    background:
                        'radial-gradient(circle at 30% 30%, #0b5cff 0%, #03132f 45%, #000 100%)',
                    color: '#fff',
                }}
            >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={logoSrc} width={682} height={141} alt="" />
                <div style={{ fontSize: 44, opacity: 0.9 }}>
                    Sites, IA e networking · Orçamentos
                </div>
            </div>
        ),
        size
    );
}
