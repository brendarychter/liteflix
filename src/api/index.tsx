import { Movie, RawMovie } from '@/utils/types';
import { BASE_PATH, API_KEY, IMAGE_PATH } from '@/utils/config';

// Finds the movie which has the maximum average
const getMovie = (movies: Movie[]) => {
  return movies.reduce((prev, current) =>
    prev.average > current.average ? prev : current
  );
};

// Transform the data received from the API into an interface with properties that are useful
const transformData = (movies: RawMovie[]) => {
  return movies.map((rawMovie) => {
    const {
      id,
      title,
      vote_average: average,
      release_date,
      backdrop_path
    } = rawMovie;
    return {
      id,
      title,
      average,
      releaseYear: new Date(release_date).getFullYear().toString(),
      imagePath: `${IMAGE_PATH}/${backdrop_path}`,
    };
  });
};

// Function that returns the featured movie after the movie list is transformed
export const getFeaturedMovie = async (): Promise<Movie> => {
  const PATH = 'now_playing';
  const movies = await getApiData(PATH)
  return await getMovie(movies)
};

// Function that returns the first 4 movies from the list after the movie list is transformed
export const getPopularMovies = async (): Promise<Movie[]> => {
  const PATH = 'popular';
  return (await getApiData(PATH)).slice(0, 4);
};

// Api connection and error handling
const getApiData = async (path: string) => {
  const URL = `${BASE_PATH}/${path}/?api_key=${API_KEY}`;
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    if (data && data.results && data.results.length > 0) {
      return transformData(data.results);
    } else {
      throw new Error('No results found');
    }
  } catch (error) {
    throw new Error('Error fetching data from API');
  }
};
