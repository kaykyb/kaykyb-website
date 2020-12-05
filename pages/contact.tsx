import { TFunction, withTranslation } from "next-i18next";
import Head from "next/head";
import React from "react";
import { GitHub, Mail } from "react-feather";
import HeroButton from "../components/index/Hero/HeroButton";
import HeroDivisor from "../components/index/Hero/HeroDivisor";
import { HeroDesc, HeroTitle } from "../components/index/Hero/HeroElements";
import Layout from "../components/layout/Layout";

const Contact = ({ t }: { readonly t: TFunction }) => {
  return (
    <Layout>
      <Head>
        <title>Kayky de Brito - Desenvolvedor de Software Freelancer</title>
      </Head>
      <div className="container">
        <HeroTitle>{t("head")}</HeroTitle>
        <HeroDesc>{t("desc")}</HeroDesc>
        <HeroDivisor />
        <HeroButton href="mailto:hello@kaykyb.com">
          <span>
            <div className="btn-content">
              <Mail
                size={24}
                style={{
                  display: "inline-block",
                  marginRight: 16,
                  color: "#ffffff",
                }}
                strokeWidth={3}
              />{" "}
              hello@kaykyb.com
            </div>
          </span>
        </HeroButton>
        <HeroDivisor />
        <HeroButton href="https://github.com/kaykyb">
          <span>
            <div className="btn-content">
              <GitHub
                size={24}
                style={{
                  display: "inline-block",
                  marginRight: 16,
                  color: "#ffffff",
                }}
                strokeWidth={3}
              />{" "}
              kaykyb
            </div>
          </span>
        </HeroButton>
        <HeroDivisor />
      </div>
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: auto;
          text-align: center;
          justify-content: center;
          align-items: center;
          justify-items: center;
          align-content: center;
          height: 100%;
          width: 100%;
        }

        .btn-content {
          display: inline-flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </Layout>
  );
};

export default withTranslation("contact")(Contact);
