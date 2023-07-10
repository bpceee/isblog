"use client";

import { useSearchParams } from "next/navigation";
import { FC, useMemo } from "react";
import Link from "next/link";
import { PostTags } from "./PostTags";
import { PostDate } from "./PostDate";

import styles from "./PostList.module.css";

type Props = {
  posts: any[];
};

export const PostList: FC<Props> = ({ posts }) => {
  const searchParams = useSearchParams();
  const tag = searchParams.get("tag");

  const filteredByTagPosts = useMemo(
    () =>
      tag
        ? posts.filter((post) =>
            post.node.labels.edges.some((edge: any) => edge.node.name === tag)
          )
        : posts,
    [tag, posts]
  );
  return (
    <>
      <ul className={styles.list}>
        {filteredByTagPosts.map(({ node: post }) => (
          <li key={post.number}>
            <PostDate
              dateString={post.createdAt}
              className={styles.date}
            ></PostDate>
            <Link
              className={styles.postTitleLink}
              href={`posts/${post.number}`}
            >
              {post.title}
            </Link>
            <PostTags tags={post.labels.edges} />
          </li>
        ))}
      </ul>
    </>
  );
};
