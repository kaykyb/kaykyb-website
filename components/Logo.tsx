import React from "react";

interface Props {
  size: number;
  print?: boolean;
}

export default function Logo({ size, print }: Props) {
  return (
    <div>
      <img
        src={print ? "/assets/logo_black.svg" : "/assets/logo_1x.png"}
        alt="Logo KB"
        className="logo"
      />
      <style jsx>{`
        .logo {
          height: ${512 * size}px;
          width: ${512 * size}px;
        }
      `}</style>
    </div>
  );
}

export function HeaderLogo({ size }: Props) {
  const pxSize = 512 * size;
  return (
    <div className="container">
      <img src="/assets/logo_grad_mask.png" alt="Logo KB" className="mask" />
      <img src="/assets/logo_gradient.png" alt="Logo KB" className="grad" />
      <div className="natural">
        <Logo size={(size * 72) / 128} />
      </div>
      <style jsx>{`
        .container {
          height: ${pxSize}px;
          width: ${pxSize}px;
          position: relative;
          cursor: pointer;
        }

        .mask {
          height: ${pxSize}px;
          width: ${pxSize}px;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 2;

          display: none;
        }

        .grad {
          height: ${pxSize}px;
          width: ${pxSize}px;
          position: absolute;
          top: calc(50% - ${pxSize * 0.5}px);
          left: calc(50% - ${pxSize * 0.5}px);
          z-index: 1;

          display: none;
        }

        .natural {
          position: absolute;
          height: 100%;
          width: 100%;
          display: grid;
          justify-content: center;
          align-items: center;
        }

        .container:hover .grad {
          animation: spin 500ms ease-out;
        }

        .container:hover .grad,
        .container:hover .mask {
          display: initial;
        }

        .container:hover .natural {
          display: none;
        }

        @keyframes spin {
          100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
