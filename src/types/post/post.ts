export interface IPost {
  readonly id: string;
  readonly name: string;
  readonly description: string;
}

export enum PostsOrder {
  Newest = "NEWEST",
  Ranking = "RANKING",
}
