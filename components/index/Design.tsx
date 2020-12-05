import React from "react";
import HeroDivisor from "./Hero/HeroDivisor";
import HeroButton from "./Hero/HeroButton";
import { HeroDesc, HeroTitle } from "./Hero/HeroElements";
import { TFunction } from "next-i18next";
import { withTranslation } from "../../i18n";

const Design = ({ t }: { readonly t: TFunction }) => {
  return (
    <div className="root">
      <div className="content">
        <HeroTitle>
          {t("head-1")}
          <br />
          <span className="feat">{t("head-2")}</span>
        </HeroTitle>
        <HeroDesc>
          {t("desc-1")}
          <br />
          {t("desc-2")}
        </HeroDesc>
        <HeroDivisor />
        <HeroButton href="https://www.freelancer.com/u/kaykyb">
          {t("port")}
        </HeroButton>
      </div>
      <img src="/assets/punchlist.png" alt="" className="code_1" />
      <img src="/assets/survey.png" alt="" className="code_2" />

      <style jsx>{`
        .root {
          height: 100vh;
          display: flex;
          flex-direction: column;
          padding: 10vh 10vw;
          width: 80vw;
          background: linear-gradient(45deg, #3b0071, #0800fe);
          position: relative;
        }

        .content {
          z-index: 2;
        }

        .feat {
          background-image: linear-gradient(45deg, #ff63b9 0%, #feea00 100%);
          -webkit-background-clip: text;
          -moz-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .code_1 {
          position: absolute;
          z-index: 0;
          bottom: 0;
          width: 60%;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
          opacity: 0.5;
          border-radius: 10px 10px 0px 0px;
        }

        .code_2 {
          position: absolute;
          z-index: 1;
          right: 128px;
          border-radius: 5px 5px 0px 0px;
          width: 35%;
          bottom: 0px;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
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

export default withTranslation("design")(Design);
