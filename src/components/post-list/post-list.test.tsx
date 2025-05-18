import type { InfiniteData, UseInfiniteQueryResult } from "@tanstack/react-query";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { render } from "@testing-library/react";

import { PostsOrder, type IPost } from "@/types/post";
import { SearchProvider } from "@/providers/search";
import type { IGetPostsResponse } from "@/queries/posts";
import * as usePostsModule from "@/queries/posts";

import { PostList } from "./post-list";

vi.mock("@/queries/posts");

beforeEach(() => {
  vi.clearAllMocks();
});

describe("PostList", () => {
  describe("when data is loading", () => {
    test("should show loading feeback", () => {
      const { getByTestId } = renderLoading();

      expect(getByTestId("loading")).toBeInTheDocument();
    });
  });

  describe("when the request fails", () => {
    test("should show error feedback", () => {
      const { getByText } = renderError();

      expect(getByText("failed to fetch data")).toBeInTheDocument();
    });
  });

  describe("when data is loaded", () => {
    test("should show posts", () => {
      const { getByText } = renderLoaded();

      expect(getByText("Post 1")).toBeInTheDocument();
    });
  });

  describe("when the content is empty", () => {
    test("should show empty state", () => {
      const { getByText } = renderEmpty();

      expect(getByText("No posts found")).toBeInTheDocument();
    });
  });
});

function renderLoading() {
  vi.spyOn(usePostsModule, "usePosts").mockReturnValue({
    isPending: true,
  } as UseInfiniteQueryResult<InfiniteData<IGetPostsResponse>>);
  return baseRender();
}

function renderError() {
  vi.spyOn(usePostsModule, "usePosts").mockReturnValue({
    error: new Error("failed to fetch data"),
  } as UseInfiniteQueryResult<InfiniteData<IGetPostsResponse>>);
  return baseRender();
}

function renderLoaded() {
  vi.spyOn(usePostsModule, "usePosts").mockReturnValue({
    isPending: false,
    error: null,
    data: {
      pages: [{ posts: [{ id: "1", name: "Post 1", thumbnail: { url: "foo.bar" } }] }],
    },
  } as UseInfiniteQueryResult<InfiniteData<IGetPostsResponse>>);
  return baseRender();
}

function renderEmpty() {
  vi.spyOn(usePostsModule, "usePosts").mockReturnValue({
    isPending: false,
    error: null,
    data: {
      pages: [{ posts: [] as Array<IPost> }],
    },
  } as UseInfiniteQueryResult<InfiniteData<IGetPostsResponse>>);
  return baseRender();
}

function baseRender() {
  return render(
    <SearchProvider>
      <PostList order={PostsOrder.Newest} />
    </SearchProvider>
  );
}
