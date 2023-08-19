import { useState, useEffect } from 'react';
import { getFeaturedMovie, getPopularMovies } from '@/api';
import { Movie, MovieType, LiteflixMovies } from '@/utils/types';
import { Button, Dropdown, Loader } from '@/components/Atoms';
import { Header, MovieList } from '@/components/Core';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [featuredMovie, setFeaturedMovie] = useState<Movie>();
  const [movies, setMovies] = useState<LiteflixMovies>({
    popular: [],
    my_list: []
  });
  const [movieType, setMovieType] = useState<MovieType>(MovieType.POPULAR);

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
        const popular = await getPopularMovies();
        setMovies((prevArray: LiteflixMovies) => ({
          ...prevArray,
          popular,
        }));
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchMoviesData();
  }, []);

  const handleDropdownSelect = (option: MovieType) => {
    setMovieType(option )
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <main
          style={{
            backgroundImage: `url(${featuredMovie?.imagePath}`
          }}
        >
          <Header />
          <aside className="container">
            <section className="featured-movie">
              <h2 className="title">{featuredMovie?.title}</h2>
              <h3 className="subtitle">
                <span className="text-wrapper">Original de </span>
                <span className="span">Liteflix</span>
              </h3>
              <div className="keypad">
                <div className="play">
                  <Button
                    text="Reproducir"
                    icon="play"
                    variant="primary"
                    action={() => console.log('hola')}
                  />
                </div>
                <div className="my-list">
                  <Button
                    text="Mi lista"
                    icon="plus"
                    variant="secondary"
                    action={() => console.log('hola')}
                  />
                </div>
              </div>
            </section>

            <div className="movie-list">
              <span>Ver: </span>
              <Dropdown onSelect={handleDropdownSelect} />
              <MovieList movies={movies[movieType]} />
            </div>
          </aside>
        </main>
      )}
    </>
  );
}
