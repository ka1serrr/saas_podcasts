export interface Base {
  id: number;
}

export interface TPodcastCard extends Base {
  title: string;
  description: string;
  imgURL: string;
}
