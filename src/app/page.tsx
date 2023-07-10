import { PostList } from "@/components/PostList";
import { gqFetch } from "@/utils/gqFetch";
export default async function Home() {
  const results = await gqFetch(pageQuery);
  const posts = results.data.repository.issues.edges as any[];

  return <PostList posts={posts} />;
}

const pageQuery = `
  query {
    repository(owner:"bpceee", name:"${process.env.BLOG_REPO}") {
      issues(last:100, labels:"post", orderBy: {field: CREATED_AT, direction: DESC}) {
        edges {
          node {
            title
            number
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
    }
  }
`;
