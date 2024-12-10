import './globals.css'; // Import the global styles here
import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="bg-gray-50 text-gray-900">
                <header className="bg-gray-800 text-white p-4 shadow">
                    <nav className="container mx-auto flex justify-between items-center">
                        <div className="space-x-4">
                            <Link href="/" className="hover:text-blue-400">Home</Link>
                            <Link href="/youtube" className="hover:text-blue-400">YouTube</Link>
                            <Link href="/music" className="hover:text-blue-400">Music</Link>
                            <Link href="/game" className="hover:text-blue-400">Game</Link>
                            <Link href="/ai" className="hover:text-blue-400">AI Creations</Link>
                            <Link href="/gallery" className="hover:text-blue-400">Gallery</Link>
                        </div>
                        <div>
                            <a
                                href="https://www.youtube.com/channel/UCjnIjTTV7byB2DlkiQbw6YA"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline text-blue-400"
                            >
                                Visit My YouTube Channel
                            </a>
                        </div>
                    </nav>
                </header>
                <main className="container mx-auto p-6">{children}</main>
            </body>
        </html>
    );
}
