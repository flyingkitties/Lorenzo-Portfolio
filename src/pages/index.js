import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Head from 'next/head';
import React from 'react';

export default function Home() {
  return (
    <div className="backgroundOrange dark:backgroundDark">
      <Head>
        <title>Lorenzo</title>
        <meta
          name="description"
          content="Lorenzo Polato - IOS Developer - Apple Developer - Brighton"
          key="desc"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no, shrink-to-fit=no, viewport-fit=cover"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

      {/* lg:min-h-[1500px] min-h-[5000px] */}
      <main className="  tracking-wide">
        <Header />
        <section className="xl:px-20 pb-56">
          <Banner />
        </section>
        <Footer />
      </main>
    </div>
  );
}
