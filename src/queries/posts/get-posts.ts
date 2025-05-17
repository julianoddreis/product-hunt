import { useQuery } from "@tanstack/react-query";
import { gql } from "graphql-request";
import { z } from "zod";

import { graphqlClient } from "@/client/graphql";
import { type IPost, type PostsOrder } from "@/types/post";
import { type IPageInfo } from "@/types/page-info";

const GetPostsSchema = z.object({
  posts: z.object({
    nodes: z.array(
      z.object({
        id: z.string(),
        name: z.string(),
        description: z.string(),
        isVoted: z.boolean(),
        votesCount: z.number(),
        thumbnail: z.object({
          url: z.string(),
        }),
      })
    ),
    pageInfo: z.object({
      hasNextPage: z.boolean(),
      hasPreviousPage: z.boolean(),
      startCursor: z.nullable(z.string()),
      endCursor: z.nullable(z.string()),
    }),
  }),
});

const GET_POSTS = gql`
  query GetPosts($order: PostsOrder!, $after: String, $topic: String) {
    posts(first: 10, order: $order, after: $after, topic: $topic) {
      nodes {
        id
        name
        description
        isVoted
        votesCount
        thumbnail {
          url
        }
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

interface Params {
  readonly order: PostsOrder;
  readonly after?: string;
  readonly topic?: string;
}

interface IGetPostsResponse {
  readonly posts: Array<IPost>;
  readonly pageInfo: IPageInfo;
}

export function usePosts({ order, after, topic }: Params) {
  return useQuery<IGetPostsResponse>({
    queryKey: ["posts", order, after, topic],
    queryFn: async () => {
      const response = await graphqlClient.request(GET_POSTS, { order, after, topic });
      const parsedResponse = GetPostsSchema.parse(response);

      const { nodes, pageInfo } = parsedResponse.posts;

      return {
        posts: nodes,
        pageInfo,
      };
    },
  });
}
