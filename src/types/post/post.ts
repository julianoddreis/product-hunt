export interface IPost {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly isVoted: boolean;
  readonly votesCount: number;
  readonly thumbnail: {
    readonly url: string;
  };
}

export enum PostsOrder {
  Newest = "NEWEST",
  Ranking = "RANKING",
}
