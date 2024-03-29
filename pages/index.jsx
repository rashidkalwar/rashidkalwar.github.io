import Head from 'next/head';

import Navbar from '../src/components/Navbar';
import Intro from '../src/sections/HomeIntro';
import Skills from '../src/sections/Skills';
import Education from '../src/sections/Education';
import Experience from '../src/sections/Experience';
import Testimonials from '../src/sections/Testimonials';
import Contact from '../src/sections/Contact';
import Footer from '../src/components/Footer';

export default function Home() {
  return (
    <>
      <Head></Head>
      <Navbar />
      <main>
        <section id="home" className="pt-24 min-h-[700px] mb-20">
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
        <section className="my-32">
          <Testimonials />
        </section>
        <section id="contact" className="mb-24">
          <Contact />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
