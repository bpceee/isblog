
import React from 'react';
import { Link } from "gatsby";

import styles from "./PostList.module.css";
import PostTags from "./PostTags";
import PostDate from "./PostDate";

class PostList extends React.Component {
  
  // componentDidMount () {
  //   document.title = process.env.REACT_APP_TITLE;
  // }

  render () {
    // const tag = this.props.match.params.tag || "post";
    const { posts } = this.props;

    return (
      <>
        {/* { tag &&
          <h1 className={styles.header}>Blog posts tagged "{tag}"</h1>
        } */}
        <ul className={styles.list}>
          {posts.map(({node: post}) => (
            <li key={post.number}>
              <PostDate dateString={post.createdAt} className={styles.date}></PostDate>
              <Link className={styles.postTitleLink} to={`/posts/${post.number}`}>{post.title}</Link>
              <PostTags tags={post.labels.edges} />
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default PostList;