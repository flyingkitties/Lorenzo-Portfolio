import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Head from "next/head";
import React from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lorenzo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className="lg:h-screen bg-gradient-to-tr from-[#FF6E75]/90 via-[#DDA044] to-[#EE7B22]/90 
      tracking-wide">
        <Header />
        <section className="sm:px-10 lg:px-20 md:pt-10">
          <Banner />
        </section>
      </main>
    </>
  );
}
