import { createFileRoute } from "@tanstack/react-router";

import { PostList } from "@/components/post-list";
import { Tab, TabList, TabPanel, Tabs } from "@/components/tabs";
import { PostsOrder } from "@/types/post";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <Tabs>
      <TabList>
        <Tab index={0}>Popular</Tab>
        <Tab index={1}>Newest</Tab>
      </TabList>
      <TabPanel index={0}>
        <PostList order={PostsOrder.Ranking} />
      </TabPanel>
      <TabPanel index={1}>
        <PostList order={PostsOrder.Newest} />
      </TabPanel>
    </Tabs>
  );
}
