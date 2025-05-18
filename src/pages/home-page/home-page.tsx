import { NavBar } from "@/components/nav-bar";
import { PostList } from "@/components/post-list";
import { ScrollArea } from "@/components/scroll-area";
import { Tabs, TabList, Tab, TabPanel } from "@/components/tabs";
import { PostsOrder } from "@/types/post";

export function HomePage() {
  return (
    <>
      <NavBar />
      <Tabs>
        <TabList>
          <Tab index={0} label="Popular" />
          <Tab index={1} label="Newest" />
        </TabList>
        <ScrollArea>
          <TabPanel index={0}>
            <PostList order={PostsOrder.Ranking} />
          </TabPanel>
          <TabPanel index={1}>
            <PostList order={PostsOrder.Newest} />
          </TabPanel>
        </ScrollArea>
      </Tabs>
    </>
  );
}
