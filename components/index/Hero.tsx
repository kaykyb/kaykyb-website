import React, { useContext } from "react";
import dynamic from "next/dynamic";
import HeroDivisor from "./Hero/HeroDivisor";
import HeroButton from "./Hero/HeroButton";
import { HeroDesc, HeroTitle } from "./Hero/HeroElements";
import { withTranslation } from "../../i18n";
import { I18nContext, TFunction } from "next-i18next";

const Typewriter = dynamic(() => import("typewriter-effect"), {
  ssr: false,
});

const Hero = ({ t }: { readonly t: TFunction }) => {
  const {
    i18n: { language },
  } = useContext(I18nContext);

  return (
    <div className="root">
      <div className="content">
        <HeroTitle>
          <span className="feat">{t("Creating")}</span> {t("with")}{" "}
          <span className="type">
            <Typewriter
              onInit={() => {}}
              options={{
                strings: [
                  t("code") + ".",
                  t("dedication") + ".",
                  t("math") + ".",
                  t("art") + ".",
                  t("design") + ".",
                ],
                autoStart: true,
                loop: true,
                cursor: "_",
              }}
            />
          </span>
        </HeroTitle>
        <HeroDesc>{t("desc")}</HeroDesc>
        <HeroDivisor />
        <HeroButton href="https://github.com/kaykyb">
          {t("meet-projects")}
        </HeroButton>
        <HeroDivisor />
        <HeroButton href="https://www.upwork.com/freelancers/~01b1507d85da751fe1">
          {t("hire-me-upwork")}
        </HeroButton>
        <HeroDivisor />
        <HeroButton href="https://www.freelancer.com/u/kaykyb">
          {t("hire-me-freelancer")}
        </HeroButton>
        <HeroDivisor />
        <HeroButton href={"/" + language + "/contact"}>
          {t("contact")}
        </HeroButton>
      </div>
      <img src="/assets/code_screen.png" alt="" className="code_1" />
      <img src="/assets/code_screen_2.png" alt="" className="code_2" />
      <style jsx>{`
        .root {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 10vw;
          width: 80vw;
          background: linear-gradient(45deg, rgb(0, 0, 0), rgb(1, 13, 52));
          position: relative;
        }

        .content {
          z-index: 2;
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
          right: 0;
          height: 80%;
          filter: brightness(0.6);
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

        .type {
          display: block;
        }
      `}</style>
    </div>
  );
};

export default withTranslation("hero")(Hero);
