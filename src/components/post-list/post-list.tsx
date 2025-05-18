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
  const { debouncedSearch } = useSearch();

  const { data, error, fetchNextPage, hasNextPage, isPending, isFetchingNextPage } = usePosts({
    order,
    topic: debouncedSearch,
  });

  if (isPending) {
    return <Loading />;
  }

  if (error) {
    return (
      <div>
        Error: <span>{error.message}</span>
      </div>
    );
  }

  return (
    <List>
      {data.pages.map(page => page.posts.map(post => <Post key={post.id} post={post} />))}

      {isFetchingNextPage && <Loading />}

      {hasNextPage && (
        <EndRefComponent isFetchingNextPage={isFetchingNextPage} fetchNextPage={fetchNextPage} />
      )}
    </List>
  );
}

interface EndRefComponentProps {
  readonly isFetchingNextPage: boolean;
  readonly fetchNextPage: () => void;
}

function EndRefComponent({ isFetchingNextPage, fetchNextPage }: EndRefComponentProps) {
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const { isIntersecting } = useIntersectionObserver(loadMoreRef);

  useEffect(() => {
    if (isFetchingNextPage) {
      return;
    }

    if (isIntersecting) {
      fetchNextPage();
    }
  }, [isFetchingNextPage, isIntersecting, fetchNextPage]);

  return <div ref={loadMoreRef} />;
}
