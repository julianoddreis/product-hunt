import { NavBar } from "@/components/nav-bar";
import { PostList } from "@/components/post-list";
import { Tabs, TabList, Tab, TabPanel } from "@/components/tabs";
import { PostsOrder } from "@/types/post";

export function HomePage() {
  return (
    <>
      <NavBar />
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
    </>
  );
}
