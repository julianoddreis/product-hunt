import { Link } from "@tanstack/react-router";

import type { IPost } from "@/types/post";

interface PostProps {
  readonly post: IPost;
  readonly children?: never;
}

export function Post({ post }: PostProps) {
  return (
    <Link params={{ postId: post.id }} to={"/posts/$postId"}>
      <div>
        <h1>{post.name}</h1>
        <p>{post.description}</p>
      </div>
    </Link>
  );
}
