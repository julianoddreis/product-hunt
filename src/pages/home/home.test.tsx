import type { InfiniteData, UseInfiniteQueryResult } from "@tanstack/react-query";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { act, fireEvent, render } from "@testing-library/react";

import { PostsOrder } from "@/types/post";
import { SearchProvider } from "@/providers/search";
import * as usePostsModule from "@/queries/posts";
import type { IGetPostsResponse } from "@/queries/posts";

import { Home } from "./home";

vi.mock("@/queries/posts");

beforeEach(() => {
  vi.useFakeTimers();
  vi.clearAllMocks();
});

describe("HomePage", () => {
  describe("when open the home page", () => {
    test("should call the popular posts", () => {
      renderLoaded();

      expect(usePostsModule.usePosts).toHaveBeenCalledWith({
        order: PostsOrder.Ranking,
        topic: "",
      });
    });
  });

  describe("when user clicks on the newest tab", () => {
    test("should call the newest posts", async () => {
      const { getByRole } = renderLoaded();

      expect(usePostsModule.usePosts).toHaveBeenCalledTimes(1);
      expect(usePostsModule.usePosts).toHaveBeenCalledWith({
        order: PostsOrder.Ranking,
        topic: "",
      });

      fireEvent.click(getByRole("tab", { name: "Newest" }));

      expect(usePostsModule.usePosts).toHaveBeenCalledTimes(2);
      expect(usePostsModule.usePosts).toHaveBeenCalledWith({
        order: PostsOrder.Newest,
        topic: "",
      });
    });
  });

  describe("when user search for a topic", () => {
    test("should call the posts with the topic", async () => {
      const { getByRole } = renderLoaded();

      fireEvent.change(getByRole("textbox"), { target: { value: "test" } });

      await act(async () => {
        vi.advanceTimersByTime(500);
      });

      expect(getByRole("textbox")).toHaveValue("test");
      expect(usePostsModule.usePosts).toHaveBeenCalledWith({
        order: PostsOrder.Ranking,
        topic: "test",
      });
    });
  });
});

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

function baseRender() {
  return render(
    <SearchProvider>
      <Home />
    </SearchProvider>
  );
}
