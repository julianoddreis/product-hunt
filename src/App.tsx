import { Fragment } from "react";

import { TabList, TabPanel, Tabs, Tab } from "@/components/tabs";
import { Post } from "@/components/post";
import { usePosts } from "@/queries/posts";

function App() {
  const { data, isLoading, error } = usePosts();

  return (
    <Fragment>
      <Tabs>
        <TabList>
          <Tab index={0}>Tab 1</Tab>
          <Tab index={1}>Tab 2</Tab>
        </TabList>
        <TabPanel index={0}>content 1</TabPanel>
        <TabPanel index={1}>content 2</TabPanel>
      </Tabs>
      {isLoading && <div>Loading...</div>}

      {error && <div>Error: {error.message}</div>}

      {data && (
        <div>
          {data.posts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      )}
    </Fragment>
  );
}

export default App;
