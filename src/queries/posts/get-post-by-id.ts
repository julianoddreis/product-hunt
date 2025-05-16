import { useQuery } from "@tanstack/react-query";
import { gql } from "graphql-request";
import { z } from "zod";

import { graphqlClient } from "@/client/graphql";
import { type IPost } from "@/types/post";

const GetPostByIdSchema = z.object({
  post: z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
  }),
});

const GET_POST_BY_ID = gql`
  query GetPostById($id: ID!) {
    post(id: $id) {
      id
      name
      description
    }
  }
`;

interface Params {
  readonly id: string;
}

export function usePostById({ id }: Params) {
  return useQuery<IPost>({
    queryKey: ["posts", id],
    queryFn: async () => {
      const response = await graphqlClient.request(GET_POST_BY_ID, { id });
      const parsedResponse = GetPostByIdSchema.parse(response);
      return parsedResponse.post;
    },
  });
}
