import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Logo from './Logo';

export interface LayoutProps {
  children: React.ReactNode;
  title: string;
}

export default function Layout({ children, title }: LayoutProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(
    () => window.addEventListener('scroll', () => setScrollY(window.scrollY)),
    []
  );

  return (
    <>
      <Head>
        <title>{title ? title + ' - NES Medical' : 'NES Medical'}</title>
        <meta name="description" content="eCommerce website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className="flex min-h-screen flex-col justify-between font-nunito"
        // style={roboto.style}
      >
        <header
          className={`${
            scrollY > 20 ? 'sticky top-0 bg-gray-100' : 'absolute top-5'
          } w-full px-4 py-2 shadow-md z-10`}
        >
          <main className="flex justify-between items-center">
            <Logo color={scrollY > 20 ? 'fill-primary' : 'fill-gray-100'} />
            <nav
              className={`flex gap-5 font-medium ${
                scrollY > 20 ? 'text-primary' : 'text-gray-100'
              }`}
            >
              <Link
                href="/"
                className="hover:underline hover:underline-offset-8 hover:decoration-4"
              >
                Бидний тухай
              </Link>
              <Link
                href="/"
                className="hover:underline hover:underline-offset-8 hover:decoration-4"
              >
                Үйлчилгээ
              </Link>
              <Link
                href="/"
                className="hover:underline hover:underline-offset-8 hover:decoration-4"
              >
                Бүтээгдэхүүн
              </Link>
              <Link
                href="/"
                className="hover:underline hover:underline-offset-8 hover:decoration-4"
              >
                Зөвөлгөө
              </Link>
              <Link
                href="/"
                className="hover:underline hover:underline-offset-8 hover:decoration-4"
              >
                Холбоо барих
              </Link>
            </nav>
          </main>
        </header>
        <div>{children}</div>
        <footer className="flex justify-center items-center shadow-inner w-full h-10">
          footer edited by bilguun hahah
        </footer>
      </div>
    </>
  );
}
