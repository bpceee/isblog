"use client";
import { FC, useEffect } from "react";

type Props = {
  postId: string;
};

export const Utterance: FC<Props> = ({ postId }) => {
  useEffect(() => {
    const main = document.querySelector("main");
    const script = document.createElement("script");
    script.src = "https://utteranc.es/client.js";
    script.setAttribute("repo", `bpceee/bpceee.github.io`);
    script.setAttribute("issue-number", postId);
    script.async = true;
    main?.appendChild(script);
    return () => {
      script.remove();
      const utterances = document.querySelector(".utterances");
      utterances?.remove();
    };
  }, [postId]);
  return null;
};
