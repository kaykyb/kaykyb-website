import Link from "next/link";
import React, { useContext } from "react";
import { GitHub } from "react-feather";
import { HeaderLogo } from "../Logo";
import Navbar from "./Navbar";
import NavbarButton from "./NavbarButton";
import { useRouter } from "next/router";
import { I18nContext } from "next-i18next";

export default function Header() {
  const {
    i18n: { language },
  } = useContext(I18nContext);

  return (
    <header className="root">
      <Link href={"/" + language}>
        <a>
          <HeaderLogo size={0.25} />
        </a>
      </Link>
      <Navbar />
      <NavbarButton
        icon={GitHub}
        label="GitHub"
        href="https://github.com/kaykyb"
      />
      <style jsx>{`
        .root {
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: saturate(180%) blur(5px);
          display: grid;
          grid-template-rows: 128px auto 128px;
          align-items: center;
          justify-content: center;
          position: fixed;
          min-height: 100%;
          border-right: 1px solid rgba(255, 255, 255, 0.1);
          z-index: 1000;
        }

        @media (max-width: 1000px) {
          .root {
            min-width: 100%;
            height: 128px;
            min-height: 128px;
            grid-template-rows: auto;
            grid-template-columns: 128px auto 128px;
            justify-content: initial;
            position: absolute;
          }
        }
      `}</style>
    </header>
  );
}
