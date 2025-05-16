import { createFileRoute } from "@tanstack/react-router";

import { usePostById } from "@/queries/posts/get-post-by-id";

export const Route = createFileRoute("/posts/$postId")({
  component: PostComponent,
});

function PostComponent() {
  const { postId } = Route.useParams();

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
