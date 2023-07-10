import React from "react";
import { Post } from "@/components/Post";
import { gqFetch } from "@/utils/gqFetch";

export default async function Page({ params }: { params: { slug: string } }) {
  const results = await gqFetch(pageQuery, {
    slug: parseInt(params.slug),
  });

  const post = results.data.repository.issue;
  return <Post post={post} />;
}

export async function generateStaticParams() {
  const results = await gqFetch(staticParamsQuery);
  const posts = results.data.repository.issues.edges;

  return posts.map((post: any) => ({
    slug: post.node.number.toString(),
  }));
}

const pageQuery = `
  query BlogPostBySlug($slug: Int!) {
    repository(owner:"bpceee", name:"bpceee.github.io") {
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

const staticParamsQuery = `
  query {
    repository(owner:"bpceee", name:"bpceee.github.io") {
      issues(last:100, labels:"post", orderBy: {field: CREATED_AT, direction: DESC}) {
        edges {
          node {
            number
          }
        }
      }
    }
  }
`;
