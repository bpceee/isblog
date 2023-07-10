export const gqFetch = async (
  query: string,
  variables?: Record<string, any>
) => {
  return await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  }).then((res) => res.json());
};
