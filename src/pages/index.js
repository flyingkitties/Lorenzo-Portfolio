import Banner from '@/components/Banner';
import Header from '@/components/Header';
import Head from 'next/head';
import React from 'react';

export default function Home() {
  return (
    <>
      <Head>
        <title>Lorenzo</title>
        <meta
          name="description"
          content="Lorenzo Polato - IOS Developer - Apple Developer - Brighton"
          key="desc"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

      <main className=" backgroundOrange dark:backgroundDark tracking-wide lg:min-h-[1500px]">
        <Header />
        <section className="xl:px-20 pb-56">
          <Banner />
        </section>
      </main>
    </>
  );
}
