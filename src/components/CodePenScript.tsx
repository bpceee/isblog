"use client";

import { useEffect } from "react";

export const CodePenScript = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://cpwebassets.codepen.io/assets/embed/ei.js`;
    document.head.appendChild(script);
    return () => script.remove();
  }, []);
  return null;
};
