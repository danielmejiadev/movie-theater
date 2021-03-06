import { ProductionCompany } from './ProductionCompany';

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path?: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  homepage?: string;
  imdb_id?: string;
  production_companies: ProductionCompany[];
  tagline: string;
  genres: { id: number; name: string }[];
  status: string;
  revenue: number;
  budget: number;
}
