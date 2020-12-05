import React from "react";
import { Children } from "../../../lib/types";

export function HeroTitle({ children }: Children) {
  return (
    <h1 className="title">
      {children}
      <style jsx>{`
        .title {
          font-size: 8vh;
          margin: 0;
          padding: 0;
        }

        @media (max-width: 1000px) {
          .title {
            font-size: 9vw;
          }
        }
      `}</style>
    </h1>
  );
}

export function HeroDesc({ children }: Children) {
  return (
    <h2 className="desc">
      {children}
      <style jsx>{`
        .desc {
          font-weight: 400;
          font-size: 4vh;
          margin: 24px 0 12px 0;
          color: rgba(255, 255, 255, 0.8);
        }

        @media (max-width: 1000px) {
          .desc {
            font-size: 5vw;
          }
        }
      `}</style>
    </h2>
  );
}
