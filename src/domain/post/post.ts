import { z } from "zod";

export const postSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
});

export interface IPost {
  readonly id: string;
  readonly name: string;
  readonly description: string;
}
