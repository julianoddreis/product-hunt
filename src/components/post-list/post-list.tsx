import { usePosts } from "@/queries/posts";
import { Post } from "@/components/post";
import type { PostsOrder } from "@/types/post";
import { useSearch } from "@/providers/search";

interface PostListProps {
  readonly order: PostsOrder;
}

export function PostList({ order }: PostListProps) {
  const { debouncedSearch } = useSearch();
  const { data, isLoading, error } = usePosts({ order, topic: debouncedSearch });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <div>{data?.posts.map(post => <Post key={post.id} post={post} />)}</div>;
}
