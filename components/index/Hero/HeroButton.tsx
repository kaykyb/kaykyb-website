import Link from "next/link";
import React from "react";
import { Children } from "../../../lib/types";

interface Props extends Children {
  href?: string;
}

export default function HeroButton({ children, href }: Props) {
  if (!href) {
    return <Base>{children}</Base>;
  }

  return (
    <Link href={href}>
      <Base>{children}</Base>
    </Link>
  );
}

const Base = ({ children }: Children) => (
  <div className="root">
    <span className="label">{children}</span>{" "}
    <span className="arrow">-{">"}</span>
    <style jsx>{`
      .root {
        font-size: 3vh;
        font-weight: 800;
        cursor: pointer;

        transition: all 0.3s ease 0ms;

        color: rgba(255, 255, 255, 0.4);
      }

      .root:hover {
        color: rgba(255, 255, 255, 1);
      }

      .arrow {
        transition: all 0.3s ease 0ms;
      }

      .root:hover .arrow {
        margin-left: 12px;
      }
    `}</style>
  </div>
);
