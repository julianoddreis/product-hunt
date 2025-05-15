import { Fragment } from "react";

import { usePosts } from "@/queries/posts";
import { Post } from "@/components/post";

function App() {
  const { data, isLoading, error } = usePosts();

  return (
    <Fragment>
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
