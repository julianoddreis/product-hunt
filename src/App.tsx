import { Fragment } from "react";

import { TabList, TabPanel, Tabs, Tab } from "@/components/tabs";
import { NavBar } from "@/components/nav-bar";
import { PostList } from "@/components/post-list";
import { PostsOrder } from "@/types/post";

function App() {
  return (
    <Fragment>
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
    </Fragment>
  );
}

export default App;
