import NavBar from "./ui/Navbar"

export const metadata = {
    title: {
        template: '%s | Vercel Demo',
        default: 'Vercel Demo'
    },
    description: 'The official Next.js Course Connecting Mongo DB Vercel, built with App Router.',
    metadataBase: new URL('https://www.mongodb.com/developer/products/atlas/how-to-connect-mongodb-atlas-to-vercel-using-the-new-integration/'),
};

export default function RootLayout({
    children,
}) {
    return (
        <html lang="en">
            <body >
                <NavBar />
                {children}
            </body>
        </html>
    );
}