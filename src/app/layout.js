import './globals.css'
import '../assets/css/main.scss';
import { Inter, Montserrat } from 'next/font/google'

import Navbar from '@/components/Navbar';

import 'bootstrap/dist/css/bootstrap.css'
import Head from 'next/head';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: 'Algoquant',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <body className={montserrat.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
