import { Newsreader, IBM_Plex_Mono } from 'next/font/google'
import '../styles/global.css'

const newsreader = Newsreader({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-newsreader',
  display: 'swap',
})

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-plex-mono',
  display: 'swap',
})

export const metadata = {
  title: 'Alejandro Segura | Portfolio',
  description: 'Alejandro Segura’s developer portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${plexMono.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}