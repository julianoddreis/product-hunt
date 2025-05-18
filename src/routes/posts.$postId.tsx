import { createFileRoute } from "@tanstack/react-router";

import { PostDetails } from "@/pages/post-details";

export const Route = createFileRoute("/posts/$postId")({
  component: PostDetails,
});
