import React from "react";
import dynamic from "next/dynamic";
import HeroDivisor from "./Hero/HeroDivisor";
import HeroButton from "./Hero/HeroButton";
import { HeroDesc, HeroTitle } from "./Hero/HeroElements";
import { TFunction } from "next-i18next";
import { withTranslation } from "../../i18n";

const Typewriter = dynamic(() => import("typewriter-effect"), {
  ssr: false,
});

const Hire = ({ t }: { readonly t: TFunction }) => {
  return (
    <div className="root">
      <div className="content">
        <HeroTitle>{t("head")}</HeroTitle>
        <HeroDivisor />
        <HeroButton href="https://www.upwork.com/freelancers/~01b1507d85da751fe1">
          {t("hire-me-upwork")}
        </HeroButton>
        <HeroDivisor />
        <HeroButton href="https://www.freelancer.com/u/kaykyb">
          {t("hire-me-freelancer")}
        </HeroButton>
      </div>
      <img src="/assets/profile_ba.png" alt="" className="code_1" />
      <style jsx>{`
        .root {
          height: 100vh;
          display: flex;
          flex-direction: column;
          padding: 10vh 10vw;
          width: 80vw;
          background: #000000;
          position: relative;
        }

        .content {
          z-index: 2;
          text-align: center;
        }

        .feat {
          background-image: linear-gradient(45deg, #ed5d5c 0%, #53305a 100%);
          -webkit-background-clip: text;
          -moz-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .code_1 {
          position: absolute;
          z-index: 1;
          right: 50%;
          transform: translateX(50%);
          bottom: 0;
          max-width: 600px;
          width: 100vw;
        }

        .code_2 {
          position: absolute;
          z-index: 0;
          right: 0;
          height: 65%;
          filter: brightness(0.25) blur(1px);
        }

        @media (max-width: 1000px) {
          .root {
            width: 100vw;
          }
        }
      `}</style>
    </div>
  );
};

export default withTranslation("hire")(Hire);
