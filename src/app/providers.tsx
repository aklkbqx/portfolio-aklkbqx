'use client';

import dynamic from 'next/dynamic';
import { HeroUIProvider } from '@heroui/react';

const ThemeProvider = dynamic(
    () => import('next-themes').then(mod => mod.ThemeProvider),
    { ssr: false }
);

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <HeroUIProvider>
                {children}
            </HeroUIProvider>
        </ThemeProvider>
    )
}