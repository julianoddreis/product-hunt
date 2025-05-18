import { useInfiniteQuery } from "@tanstack/react-query";
import { gql } from "graphql-request";
import { z } from "zod";

import { graphqlClient } from "@/client/graphql";
import { PostSchema, type IPost, type PostsOrder } from "@/types/post";
import { PageInfoSchema, type IPageInfo } from "@/types/page-info";

const GetPostsSchema = z.object({
  posts: z.object({
    nodes: z.array(PostSchema),
    pageInfo: PageInfoSchema,
  }),
});

const GET_POSTS = gql`
  query GetPosts($order: PostsOrder!, $after: String, $topic: String) {
    posts(first: 10, order: $order, after: $after, topic: $topic) {
      nodes {
        id
        name
        description
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

export interface IGetPostsResponse {
  readonly posts: Array<IPost>;
  readonly pageInfo: IPageInfo;
}

export function usePosts({ order, after, topic }: Params) {
  return useInfiniteQuery<IGetPostsResponse>({
    queryKey: ["posts", order, after, topic],
    initialPageParam: null,
    getNextPageParam: lastPage => lastPage.pageInfo.endCursor,
    queryFn: async ({ pageParam }) => {
      const response = await graphqlClient.request(GET_POSTS, { order, after: pageParam, topic });
      const parsedResponse = GetPostsSchema.parse(response);

      const { nodes, pageInfo } = parsedResponse.posts;

      return {
        posts: nodes,
        pageInfo,
      };
    },
  });
}
