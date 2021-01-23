import { Movie } from './Movie';

export interface MoviesResults {
  page?: number;
  total_pages?: number;
  total_results?: number;
  results?: Movie[];
}
