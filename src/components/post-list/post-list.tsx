import { usePosts } from "@/queries/posts";
import { Post } from "@/components/post";
import type { PostsOrder } from "@/types/post";
import { useSearch } from "@/providers/search";
import { Loading } from "@/components/loading";

import { List } from "./post-list.styles";

interface PostListProps {
  readonly order: PostsOrder;
}

export function PostList({ order }: PostListProps) {
  const { debouncedSearch } = useSearch();
  const { data, isLoading, error } = usePosts({ order, topic: debouncedSearch });

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <List>{data?.posts.map(post => <Post key={post.id} post={post} />)}</List>;
}
