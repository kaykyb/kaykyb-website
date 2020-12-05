import { TFunction, withTranslation } from "next-i18next";
import Head from "next/head";
import React from "react";
import { GitHub, Mail } from "react-feather";
import HeroButton from "../components/index/Hero/HeroButton";
import HeroDivisor from "../components/index/Hero/HeroDivisor";
import { HeroDesc, HeroTitle } from "../components/index/Hero/HeroElements";
import Layout from "../components/layout/Layout";

const ContactContent = ({ t }: { readonly t: TFunction }) => (
  <>
    <HeroTitle>{t("head")}</HeroTitle>
    <HeroDesc>{t("desc")}</HeroDesc>
  </>
);

const ContactContentTranslate = withTranslation("contact")(ContactContent);

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Kayky de Brito - Freelancer Software Developer</title>
      </Head>
      <div className="container">
        <ContactContentTranslate />
        <HeroDivisor />
        <HeroButton>
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
              {/* Thanks to https://stackoverflow.com/a/20383295/10777177 */}
              <a
                href="#"
                className="cryptedmail"
                data-name="hello"
                data-domain="kaykyb"
                data-tld="com"
                onClick={function (e) {
                  const t = e.target as HTMLAnchorElement;
                  const name = t.getAttribute("data-name");
                  const domain = t.getAttribute("data-domain");
                  const tld = t.getAttribute("data-tld");

                  window.location.href =
                    "mailto:" + name + "@" + domain + "." + tld;
                  return false;
                }}
              ></a>
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
}
