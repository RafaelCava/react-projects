import Head from "next/head";
import { Inter } from "next/font/google";
import TopBar from "@/componentes/TopBar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Loja Next</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopBar />
      <main className="container text-center">
        <h1>Página Inicial</h1>
      </main>
    </>
  );
}
