export const metadata = {
    title: 'Alejandro Segura | Portfolio',
    description: 'Alejandro Segura\'s developer portfolio'
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    )
}