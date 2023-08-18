import { useState, useEffect } from 'react';
import { getFeaturedMovie, getPopularMovies } from '@/api';
import { Movie } from '@/utils/types';
import { Button, Loader } from '@/components/Atoms';
import Header from '@/components/Core/Header';

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
              {/* Dropdown */}
              {popularMovies?.map(({ id, title }) => <p key={id}>{title}</p>)}
            </div>
          </aside>
        </main>
      )}
    </>
  );
}
