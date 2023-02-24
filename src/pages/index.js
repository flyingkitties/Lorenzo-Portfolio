import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Head from "next/head";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lorenzo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-[#DDDDDD]">
        <Header />

        <Banner />
      </main>
    </>
  );
}
