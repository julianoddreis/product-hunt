import type { IPost } from "@/types/post";

import {
  PostComponent,
  Content,
  Description,
  Thumbnail,
  Title,
  Votes,
  UpIcon,
  Card,
} from "./post.styles";

interface PostProps {
  readonly post: IPost;
  readonly children?: never;
}

export function Post({ post }: PostProps) {
  return (
    <PostComponent to={"/posts/$postId"} params={{ postId: post.id }}>
      <Card>
        <Thumbnail src={post.thumbnail.url} alt={post.name} />
        <Content>
          <Title>{post.name}</Title>
          <Description>{post.description}</Description>
        </Content>
      </Card>
      <Votes>
        <UpIcon />
        {post.votesCount}
      </Votes>
    </PostComponent>
  );
}
