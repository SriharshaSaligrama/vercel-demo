import { Metadata } from 'next';

export const metadata: Metadata = {
    title: {
        template: '%s | Vercel Demo',
        default: 'Vercel Demo',
    },
    description: 'The official Next.js Course Connecting Mongo DB Vercel, built with App Router.',
    metadataBase: new URL('https://www.mongodb.com/developer/products/atlas/how-to-connect-mongodb-atlas-to-vercel-using-the-new-integration/'),
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body >{children}</body>
        </html>
    );
}