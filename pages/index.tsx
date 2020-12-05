import Head from "next/head";
import React from "react";
import Design from "../components/index/Design";
import Hero from "../components/index/Hero";
import Hire from "../components/index/Hire";
import Layout from "../components/layout/Layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Kayky de Brito - Freelancer Software Developer</title>
      </Head>
      <div className="container">
        <Hero />
        <Design />
        <Hire />
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: row;
        }

        @media (max-width: 1000px) {
          .container {
            flex-direction: column;
          }
        }
      `}</style>
    </Layout>
  );
}
