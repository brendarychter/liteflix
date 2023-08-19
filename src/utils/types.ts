export interface Movie {
  id: number;
  title: string;
  imagePath: string;
  average: number;
  releaseYear: string;
  type: string;
}

export type Dates = {
  maximum: number;
  minimum: number;
};

export interface MovieApiResponse {
  page: number;
  total_results: number;
  total_pages: number;
  results: Movie[];
  dates?: Dates;
}

export interface RawMovie {
  popularity: number;
  vote_count: number;
  video: boolean;
  poster_path: string;
  id: number;
  adult: boolean;
  backdrop_path: string;
  original_language: string;
  original_title: string;
  genre_ids: number[];
  title: string;
  vote_average: number;
  overview: string;
  release_date: string;
}

export type ButtonType = {
  text: string;
  variant: string;
  icon?: string;
  action: Function;
}

export type LiteflixMovies = {
  popular: Movie[],
  my_list: Movie[]
}

export enum MovieType {
  POPULAR = 'popular',
  MY_LIST = 'my_list'
}