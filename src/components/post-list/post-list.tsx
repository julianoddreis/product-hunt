import { useRef, useEffect } from "react";

import { usePosts } from "@/queries/posts";
import { Post } from "@/components/post";
import type { PostsOrder } from "@/types/post";
import { useSearch } from "@/providers/search";
import { Loading } from "@/components/loading";
import { useIntersectionObserver } from "@/hooks/intersection-observer";

import { List } from "./post-list.styles";

interface PostListProps {
  readonly order: PostsOrder;
}

export function PostList({ order }: PostListProps) {
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const { debouncedSearch } = useSearch();

  const { data, error, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } = usePosts({
    order,
    topic: debouncedSearch,
  });

  const { isIntersecting } = useIntersectionObserver(loadMoreRef);

  useEffect(() => {
    if (!hasNextPage || isFetchingNextPage) {
      return;
    }

    if (isIntersecting) {
      fetchNextPage();
    }
  }, [hasNextPage, isFetchingNextPage, isIntersecting, fetchNextPage]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <List>
      {data?.pages.map(page => page.posts.map(post => <Post key={post.id} post={post} />))}

      {isFetchingNextPage && <Loading />}

      {hasNextPage && <div ref={loadMoreRef} />}
    </List>
  );
}
