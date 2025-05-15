import { useQuery } from "@tanstack/react-query";
import { gql } from "graphql-request";

import { graphqlClient } from "../../client/graphql";
import { type IPost } from "../../domain/post/post";

interface GetPostsQuery {
  posts: {
    edges: Array<{ node: IPost }>;
  };
}

const GET_POSTS = gql`
  query {
    posts(first: 1) {
      edges {
        node {
          id
          name
          description
        }
      }
    }
  }
`;

export function usePosts() {
  return useQuery<IPost[]>({
    queryKey: ["posts"],
    queryFn: async () => {
      const response = await graphqlClient.request<GetPostsQuery>(GET_POSTS);
      return response.posts.edges.map(edge => edge.node);
    },
  });
}
