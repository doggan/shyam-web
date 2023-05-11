import Head from 'next/head';
import { Inter } from 'next/font/google';
import Projects from '@/components/projects';
import Experience from '@/components/experience';
import Landing from '@/components/landing';
import NavBar from '@/components/navbar';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Shyam Guthikonda - Software Engineer &amp; Game Developer</title>
        <meta
          name="description"
          content="Shyam Guthikonda - Software Engineer &amp; Game Developer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <NavBar />

      <main>
        <Landing />
        <Experience />
        <Projects />
      </main>

      <Footer />
    </>
  );
}


