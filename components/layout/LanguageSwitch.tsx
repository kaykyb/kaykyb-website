import { TFunction } from "next-i18next";
import Link from "next/link";
import React, { useState } from "react";
import { ChevronDown } from "react-feather";
import { withTranslation } from "../../i18n";

const LanguageSwitch = ({ t }: { readonly t: TFunction }) => {
  let [open, setOpen] = useState(false);

  return (
    <div className="root" onClick={() => setOpen(!open)}>
      <img
        src={`/assets/flags/${t("lang-slug")}.svg`}
        alt="Flag"
        className="flag"
      />{" "}
      {t("lang")} <ChevronDown />
      {open && (
        <div className="select">
          <FlagLink slug="pt" lang="português" />
          <FlagLink slug="en" lang="english" />
        </div>
      )}
      <style jsx>{`
        .root {
          position: fixed;
          top: 24px;
          right: 24px;
          height: 36px;
          padding: 0 12px 0px 16px;
          background: rgba(0, 0, 0, 0.5);
          line-height: 36px;
          color: rgba(255, 255, 255, 0.75);
          font-size: 0.75rem;
          cursor: pointer;
          display: grid;
          grid-template-columns: 24px auto 24px;
          grid-column-gap: 8px;
          justify-content: center;
          align-items: center;
          border-radius: 5px;
          font-weight: 800;
          z-index: 99999;
        }

        .select {
          position: fixed;
          top: 0;
          right: 0;
          left: 0;
          bottom: 0;
          height: 100vh;
          width: 100vw;
          z-index: 99998;
          background: rgba(0, 0, 0, 0.5);

          display: grid;
          align-items: center;
          align-content: center;
          justify-content: center;
          justify-items: center;

          grid-template-columns: auto auto;
          grid-column-gap: 32px;
          backdrop-filter: saturate(0%) blur(10px);

          animation: open 3s ease-out;
        }

        .flag {
          opacity: 0.75;
        }

        .root:hover,
        .root:hover .flag {
          background: rgba(0, 0, 0, 0.75);
          color: #ffffff;
          opacity: 1;
        }

        @keyframes open {
          0% {
            backdrop-filter: saturate(100%) blur(0px);
          }

          100% {
            backdrop-filter: saturate(0%) blur(10px);
          }
        }

        @media (max-width: 1000px) {
          .root {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

const FlagLink = ({ slug, lang }: { slug: string; lang: string }) => (
  <a href={`/${slug}`}>
    <div className="root">
      <div className="flag" />
      <span className="label">{lang}</span>
      <style jsx>{`
        .root {
          height: 200px;
          width: 200px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;

          display: grid;
          align-items: center;
          align-content: center;
          justify-content: center;
          justify-items: center;

          grid-template-rows: 100px 32px;
          grid-row-gap: 8px;
          transition: all 0.3s ease 0ms;
        }

        .flag {
          height: 100%;
          border-radius: 16px;
          width: 142px;
          background-image: url(/assets/flags/${slug}.svg);
          background-position: left;
          background-size: cover;
        }

        .label {
          text-transform: uppercase;
          line-height: 32px;
          font-size: 1.2em;
        }

        .root:hover {
          background: #000000;
          transform: translateY(-8px);
          box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.05);
        }
      `}</style>
    </div>
  </a>
);

export default withTranslation("common")(LanguageSwitch);
