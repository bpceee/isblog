import React, { FC } from "react";
import { PostDate } from "./PostDate";
import { PostTags } from "./PostTags";
import { Utterance } from "./Utterance";
import { CodePenScript } from "./CodePenScript";
import { injectCodePen } from "@/utils/injectCodePen";

import "github-markdown-css/github-markdown.css";
import styles from "./Post.module.css";
import "./Post.css";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

type Props = {
  post: any;
};

export const Post: FC<Props> = ({ post }) => {
  const { bodyHTML, hasCodePen } = injectCodePen(post.bodyHTML);
  return (
    <article className={styles.blogPost}>
      <header>
        <h1 className={montserrat.className}>{post.title}</h1>
        <p className={styles.meta}>
          Published <PostDate dateString={post.createdAt} />
          {post.labels && post.labels.edges.length > 1 && (
            <React.Fragment>
              {" "}
              · tagged with
              <PostTags tags={post.labels.edges} />
            </React.Fragment>
          )}
        </p>
      </header>
      <div
        className="markdown-body"
        dangerouslySetInnerHTML={{ __html: bodyHTML }}
      ></div>
      <Utterance postId={post.number} />
      {/* Load or reload CodePen script otherwise the block won't get initiated */}
      {hasCodePen && <CodePenScript />}
    </article>
  );
};
