import Head from 'next/head';
import Link from 'next/link';

import Navbar from '../src/components/Navbar';
import Intro from '../src/sections/HomeIntro';
import Skills from '../src/sections/Skills';
import Education from '../src/sections/Education';
import Experience from '../src/sections/Experience';
import Testimonials from '../src/sections/Testimonials';
import Contact from '../src/sections/Contact';

export default function Home() {
  return (
    <>
      <Head></Head>
      <Navbar />
      <main>
        <section id="home" className="pt-24 min-h-[700px]">
          <Intro />
        </section>
        <section id="portfolio" className="mx-auto pt-16">
          <Skills />
        </section>
        <section className="mb-24">
          <Education />
        </section>
        <section className="mb-24">
          <Experience />
        </section>
        <section className="mb-24">
          <Testimonials />
        </section>
        <section id="contact" className="mb-24">
          <Contact />
        </section>
      </main>
      <footer>
        <div className="flex justify-center items-center py-5">
          <Link
            href="https://github.com/rashidkalwar"
            className="font-mono text-center text-xs md:text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300"
          >
            Designed &amp; Developed by Rashid Ali
          </Link>
        </div>
      </footer>
    </>
  );
}
