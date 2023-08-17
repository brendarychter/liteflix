import { useState, useEffect } from 'react';
import { getFeaturedMovie, getPopularMovies } from '../../api';
import { Movie } from '../../utils/types';
import Spinner from '../../components/Atoms/Loader/';
import Header from '../../components/Core/Header';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [featuredMovie, setFeaturedMovie] = useState<Movie>();
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMoviesData = async () => {
      try {
        const movie = await getFeaturedMovie();
        setFeaturedMovie(movie);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
      try {
        const movies = await getPopularMovies();
        setPopularMovies(movies);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchMoviesData();
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div
          className="home"
          style={{
            backgroundImage: `url(${featuredMovie?.imagePath}`
          }}
        >
          <Header/>
          {/* popular movie list */}
          {/* my movie list */}
        </div>
      )}
    </>
  );
}
