import type { IPost } from "@/domain/post";

interface PostProps {
  readonly post: IPost;
  readonly children?: never;
}

export function Post({ post }: PostProps) {
  return <div>{post.name}</div>;
}
