import React from "react";
import { Post } from "@/components/Post";
import { gqFetch } from "@/utils/gqFetch";

export default async function Page() {
  const results = await gqFetch(pageQuery, {
    slug: 3,
  });

  const post = results.data.repository.issue;
  return <Post post={post} />;
}

const pageQuery = `
  query BlogPostBySlug($slug: Int!) {
    repository(owner:"bpceee", name:"${process.env.BLOG_REPO}") {
      issue(number: $slug) {
        number
        title
        bodyHTML
        createdAt
        labels(first: 10) {
          edges {
            node { 
              name
            }
          }
        }
      }
    }
  }
`;
