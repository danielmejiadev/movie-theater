// Depedencies
import Base from './base';
import { Movie } from '../../interfaces/Movie';

/**
 * Movies resource.
 * @author Daniel Mejia
 * @class Movies
 */
export class Movies extends Base {
  /**
   * Resource url.
   * @type { string }
   */
  resourceUrl = 'movie';

  /**
   * Gets the movie detail.
   * @param {number} id The movie identifier.
   * @returns {Promise<Movie>} The movie detail.
   */
  movieDetail(id: number): Promise<Movie> {
    return this.list<Movie>({
      url: `${this.resourceUrl}/${id}`
    });
  }
}

export default Movies;
