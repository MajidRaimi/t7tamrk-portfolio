import type { Metadata } from 'next';
import './globals.css';
import 'aos/dist/aos.css';
import AOSProvider from './providers/AOSProvider';


export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html>
            <body>
                <AOSProvider />
                {children}
            </body>
        </html>
    );
}
