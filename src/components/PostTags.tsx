import React, { FC } from "react";
import Link from "next/link";
import styles from "./PostTags.module.css";

type Props = {
  tags: { node: { name: string } }[];
};

export const PostTags: FC<Props> = ({ tags }) =>
  tags
    .filter(({ node: tag }) => tag.name !== "post")
    .map(({ node: tag }, idx) => (
      <React.Fragment key={idx}>
        {" "}
        <Link className={styles.tag} key={idx} href={`?tag=${tag.name}`}>
          {tag.name}
        </Link>
      </React.Fragment>
    ));
