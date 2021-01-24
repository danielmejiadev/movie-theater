// Depedencies
import Base from './base';
import { MoviesResults } from '../../interfaces/MovieResults';

/**
 * Search resource.
 * @author Daniel Mejia
 * @class Search
 */
export class Search extends Base {
  /**
   * Resource url.
   * @type { string }
   */
  resourceUrl = 'search';

  /**
   * Filter movies by given query text.
   * @param {string} query The query text to filter.
   * @returns {Promise<MoviesResults>} The movie results.
   */
  filterMovies(query: string): Promise<MoviesResults> {
    const params = new URLSearchParams();
    params.append('query', query);

    return this.list<MoviesResults>({
      url: `${this.resourceUrl}/movie`,
      params
    });
  }
}

export default Search;
