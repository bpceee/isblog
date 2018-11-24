import React from "react";
import { Link } from "react-router-dom";
import styles from "./PostTags.module.css";

const PostTags = ({tags}) => 
  tags
  .filter(({node: tag}) => tag.name !== "post")
  .map(({node: tag}, idx) => (
    <React.Fragment key={idx}>
      {" "}
      <Link className={styles.tag} to={`/posts/tags/${tag.name}`}>{tag.name}</Link>
    </React.Fragment>
  ));

  export default PostTags;