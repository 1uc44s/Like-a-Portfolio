"use client";

import { useEffect, useRef } from "react";
import { animate } from "animejs";

export default function AnimatedBorder() {
  const borderRef = useRef(null);

  useEffect(() => {
    if (!borderRef.current) return; // 🔴 BU ŞART ÇOK ÖNEMLİ

    animate({
      targets: document.body,
      translateX: [0, 10],
    });
  }, []);

  return (
    <svg width="200" height="100">
      <rect
        ref={borderRef}
        x="2"
        y="2"
        width="196"
        height="96"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeDasharray="4 6"
      />
    </svg>
  );
}
