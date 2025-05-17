import { z } from "zod";

export interface IPost {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly votesCount: number;
  readonly thumbnail: {
    readonly url: string;
  };
}

export enum PostsOrder {
  Newest = "NEWEST",
  Ranking = "RANKING",
}

export const PostSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  votesCount: z.number(),
  thumbnail: z.object({
    url: z.string(),
  }),
});
