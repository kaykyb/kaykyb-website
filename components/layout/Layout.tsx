import React from "react";
import { Children } from "../../lib/types";
import Header from "./Header";
import LanguageSwitch from "./LanguageSwitch";

export default function Layout({ children }: Children) {
  return (
    <div className="root">
      <Header />
      <div className="container">
        <LanguageSwitch />
        <main className="content-wrapper">
          <div />
          {children}
        </main>
      </div>
      <style jsx>{`
        .root {
          background: #ffffff;

          min-height: 100vh;
          min-width: 100%;
        }

        .container,
        .content-wrapper {
          background: #000000;
          min-height: 100vh;
          min-width: 100%;
        }

        .content-wrapper {
          display: grid;
          grid-template-columns: 128px auto;
        }

        @media (max-width: 1000px) {
          .content-wrapper {
            width: 100vw;
            grid-template-columns: auto;
            grid-template-rows: 128px auto;
          }
        }
      `}</style>
    </div>
  );
}
