import React from "react";

export default function HeroDivisor({ inverted }: { inverted?: boolean }) {
  return (
    <div className="root">
      <style jsx>{`
        .root {
          height: 1px;
          width: 100%;
          background: ${
            inverted ? "rgba(0, 0, 0, 0.1);" : "rgba(255, 255, 255, 0.1);"
          }
          margin: 24px 0;
        }
      `}</style>
    </div>
  );
}
