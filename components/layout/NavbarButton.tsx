import React, { FC } from "react";
import { IconProps } from "react-feather";
import Link from "next/link";

interface Props {
  icon: FC<IconProps>;
  active?: boolean;
  label: string;
  href: string;
}

export default function NavbarButton(props: Props) {
  return (
    <Link href={props.href}>
      <a className="link">
        <props.icon size={48} strokeWidth={1}></props.icon>
        <span>{props.label}</span>
        <style jsx>{`
          .link {
            display: grid;
            grid-template-rows: auto auto;
            grid-template-columns: 100%;
            width: 100%;
            justify-items: center;
            grid-row-gap: 8px;
            color: ${props.active ? "#ffffff" : "rgba(255, 255, 255, 0.5)"};
            text-transform: lowercase;
            transition: all 0.25s ease-in-out;
          }

          .link:hover {
            transform: scale(1.2);
            animation: spin 3s infinite ease-out;
          }

          @keyframes spin {
            0% {
              color: rgba(255, 255, 255, 0.5);
            }

            50% {
              color: rgba(255, 255, 255, 1);
            }

            100% {
              color: rgba(255, 255, 255, 0.5);
            }
          }
        `}</style>
      </a>
    </Link>
  );
}
