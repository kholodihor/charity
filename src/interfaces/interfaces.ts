export interface IEvent {
  id: string;
  date: string;
  title: string;
  place: string;
  booked: boolean;
}

export interface IArticle {
  theme: string;
  title: string;
  text: string;
  image: string;
}

export interface ILinks {
  name: string;
  url: string;
  data: string;
}

export interface ICards {
  title: string;
  subtitle: string;
  goal: number;
  raised: number;
  togo: number;
  image: string;
}

export interface INews {
  title: string;
  subtitle: string;
  owner: string;
  image: string;
  date: string;
}
