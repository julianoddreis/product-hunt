import { useNavigate } from "@tanstack/react-router";

import type { IPost } from "@/types/post";

import { PostComponent, Content, Description, Thumbnail, Title, Votes } from "./post.styles";

interface PostProps {
  readonly post: IPost;
  readonly children?: never;
}

export function Post({ post }: PostProps) {
  const navigate = useNavigate({ from: "/" });

  const handleVote = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    console.log("vote");
  };

  return (
    <PostComponent onClick={() => navigate({ to: "/posts/$postId", params: { postId: post.id } })}>
      <Thumbnail src={post.thumbnail.url} alt={post.name} />
      <Content>
        <Title>{post.name}</Title>
        <Description>{post.description}</Description>
      </Content>
      <Votes onClick={handleVote} isVoted={post.isVoted}>
        {post.votesCount}
      </Votes>
    </PostComponent>
  );
}
