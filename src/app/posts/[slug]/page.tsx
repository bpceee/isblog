import { Metadata } from "next";
import React from "react";
import { Post } from "@/components/Post";
import { gqFetch } from "@/utils/gqFetch";

type Params = {
  slug: string;
};

export default async function Page({ params }: { params: Params }) {
  const result = await gqFetch(pageQuery, {
    slug: parseInt(params.slug),
  });

  const post = result.data.repository.issue;
  return <Post post={post} />;
}

export async function generateStaticParams() {
  const results = await gqFetch(staticParamsQuery);
  const posts = results.data.repository.issues.edges;

  return posts.map((post: any) => ({
    slug: post.node.number.toString(),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const result = await gqFetch(pageQuery, {
    slug: parseInt(params.slug),
  });

  return {
    title: result.data.repository.issue.title,
  };
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

const staticParamsQuery = `
  query {
    repository(owner:"bpceee", name:"${process.env.BLOG_REPO}") {
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
