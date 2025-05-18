import { getRouteApi } from "@tanstack/react-router";

import { usePostById } from "@/queries/posts";
import { Loading } from "@/components/loading";

import {
  Card,
  Title,
  CardHeader,
  Description,
  Header,
  Media,
  Button,
  Footer,
  Spacing,
} from "./post-details.styles";
import { Thumbnail } from "@/components/thumbail";
import { BackButton } from "@/components/back-button";
import { ScrollArea } from "@/components/scroll-area";

const route = getRouteApi("/posts/$postId");

export function PostDetails() {
  const { postId } = route.useParams();

  const { data, isPending, isError } = usePostById({ id: postId });

  if (isPending) {
    return <Loading />;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <>
      <Header>
        <BackButton to="/" />
      </Header>
      <ScrollArea>
        {data.media[0] && (
          <Spacing>
            <Media src={data.media[0].url} alt={data.name} />
          </Spacing>
        )}
        <Card>
          <CardHeader>
            <Thumbnail src={data.thumbnail.url} alt={data.name} size={3} />
            <div>
              <Title>{data.name}</Title>
            </div>
          </CardHeader>
          <Description>{data.description}</Description>
        </Card>
      </ScrollArea>
      <Footer>
        <Button onClick={() => window.open(data.website, "_blank")}>Get it</Button>
        <Button>Votes ({data.votesCount})</Button>
      </Footer>
    </>
  );
}
