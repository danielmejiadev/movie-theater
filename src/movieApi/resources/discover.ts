// Depedencies
import Base from "./base";

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

    return this.list({ url: `${this.resourceUrl}/movie`, params })
  }
}

export default Discover;
