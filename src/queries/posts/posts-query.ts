import { useQuery } from "@tanstack/react-query";
import { gql } from "graphql-request";
import { z } from "zod";

import { graphqlClient } from "@/client/graphql";
import { type IPost } from "@/types/post";
import { type IPageInfo } from "@/types/page-info";

const GetPostsSchema = z.object({
  posts: z.object({
    nodes: z.array(
      z.object({
        id: z.string(),
        name: z.string(),
        description: z.string(),
      })
    ),
    pageInfo: z.object({
      hasNextPage: z.boolean(),
      hasPreviousPage: z.boolean(),
      startCursor: z.string(),
      endCursor: z.string(),
    }),
  }),
});

const GET_POSTS = gql`
  query {
    posts(first: 1) {
      nodes {
        id
        name
        description
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
`;

interface IGetPostsResponse {
  readonly posts: Array<IPost>;
  readonly pageInfo: IPageInfo;
}

export function usePosts() {
  return useQuery<IGetPostsResponse>({
    queryKey: ["posts"],
    queryFn: async () => {
      const response = await graphqlClient.request(GET_POSTS);
      const parsedResponse = GetPostsSchema.parse(response);

      return {
        posts: parsedResponse.posts.nodes,
        pageInfo: parsedResponse.posts.pageInfo,
      };
    },
  });
}
