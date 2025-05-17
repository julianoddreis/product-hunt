import { useQuery } from "@tanstack/react-query";
import { gql } from "graphql-request";
import { z } from "zod";

import { graphqlClient } from "@/client/graphql";
import { PostSchema, type IPost } from "@/types/post";

const GetPostByIdSchema = z.object({
  post: PostSchema,
});

const GET_POST_BY_ID = gql`
  query GetPostById($id: ID!) {
    post(id: $id) {
      id
      name
      description
      votesCount
      thumbnail {
        url
      }
    }
  }
`;

interface Params {
  readonly id: string;
}

export function usePostById({ id }: Params) {
  return useQuery<IPost>({
    queryKey: ["post", id],
    queryFn: async () => {
      const response = await graphqlClient.request(GET_POST_BY_ID, { id });
      return GetPostByIdSchema.parse(response).post;
    },
  });
}
