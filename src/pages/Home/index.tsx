import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { getFeaturedMovie, getPopularMovies } from '../../api';
import { Movie } from '@utils/types';

export default function Home() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [featuredMovie, setFeaturedMovie] = useState<Movie>();
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMoviesData = async () => {
      try {
        const movie = await getFeaturedMovie();
        setFeaturedMovie(movie);
      } catch (error) {
        setLoading(false);
      }
      try {
        const movies = await getPopularMovies();
        setPopularMovies(movies);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchMoviesData();
  }, []);

  return (
    <>
      <div>
        <p>{featuredMovie?.title}</p>
        {popularMovies?.map(({id, title}) => <p key={id}>{title}</p>)}
      </div>
    </>
  );
}
