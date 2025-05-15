import { Fragment } from "react/jsx-runtime";
import "./App.css";
import { usePosts } from "./queries/posts";

function App() {
  const { data, isLoading, error } = usePosts();

  return (
    <Fragment>
      {isLoading && <div>Loading...</div>}

      {error && <div>Error: {error.message}</div>}

      {data && <div>{JSON.stringify(data)}</div>}
    </Fragment>
  );
}

export default App;
