import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Portfolio',
    description: 'Website Description',
    icons: {
        icon: '/public/web_logo.jpg', // đặt file trong thư mục public/
    }
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    )
}