import { getRouteApi } from "@tanstack/react-router";

import { usePostById } from "@/queries/posts";

const route = getRouteApi("/posts/$postId");

export function PostDetails() {
  const { postId } = route.useParams();

  const { data, isLoading, isError } = usePostById({ id: postId });

  if (isLoading) {
    return <PostSkeleton />;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div>
      Post ID: {postId}
      <h1>{data?.name}</h1>
      <p>{data?.description}</p>
    </div>
  );
}

function PostSkeleton() {
  return <div>Loading...</div>;
}
