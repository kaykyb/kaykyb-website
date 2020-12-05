import React, { useContext } from "react";
import { AtSign, BookOpen, Camera } from "react-feather";
import NavbarButton from "./NavbarButton";
import { I18nContext, TFunction } from "next-i18next";
import { withTranslation } from "../../i18n";

const Navbar = ({ t }: { readonly t: TFunction }) => {
  const {
    i18n: { language },
  } = useContext(I18nContext);

  return (
    <nav className="root">
      <NavbarButton
        icon={BookOpen}
        label={t("port")}
        href="https://www.freelancer.com/u/kaykyb"
      />
      <NavbarButton
        icon={AtSign}
        label={t("contact")}
        href={`/${language}/contact`}
      />

      <style jsx>{`
        .root {
          display: grid;
          grid-template-columns: auto;
          grid-row-gap: 32px;
          grid-column-gap: 32px;
          justify-content: center;
          align-items: center;
        }

        @media (max-width: 1000px) {
          .root {
            grid-template-columns: auto auto;
          }
        }
      `}</style>
    </nav>
  );
};

export default withTranslation("common")(Navbar);
