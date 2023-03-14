import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Head from "next/head";
import React from "react";
import Orange from "../../public/images/OrangeWP.jpeg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lorenzo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-hero tracking-wide">
        <Header />
        <section className="sm:px-10 lg:px-20 md:pt-10">
          <Banner />
        </section>
      </main>
    </>
  );
}
