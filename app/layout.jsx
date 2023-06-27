import '../styles/globals.css';
import NavMenu from './NavMenu';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: 'Guitar Colors',
  description: 'Test website to help me learn next.js and guitar.',
}

export default function RootLayout({ children }){
  return (
    <html lang="en">
      <body className={poppins.className}>
        
        {children}
      </body>
    </html>
  )
}
