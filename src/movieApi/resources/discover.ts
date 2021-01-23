// Depedencies
import Base from "./base";

import { MoviesResults } from '../../interfaces/MovieResults';

/**
 * Discover resource.
 * @author Daniel Mejia
 * @class Discover
 */
export class Discover extends Base {
  /**
   * Resource url.
   * @type { string }
   */
  resourceUrl = 'discover';

  /**
   * Gets the popular movies in the api.
   * @returns The 
   */
  popularMovies() {
    const params = new URLSearchParams();
    params.append('sort_by', 'popularity.desc');

    return this.list<MoviesResults>({ url: `${this.resourceUrl}/movie`, params })
  }
}

export default Discover;
