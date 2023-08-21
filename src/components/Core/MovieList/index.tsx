import { Movie } from '@/utils/types';
import { Card } from '@/components/Core/Card';

export const MovieList = ( {movies} : any): JSX.Element => {
  return (
    <>
      {movies.length > 0 ? (
        <div className="container">
          {movies?.map((movie: Movie) => <Card key={movie.id} {...movie} />)}
        </div>
      ) : (
        <div className="empty">No hay películas para mostrar</div>
      )}
    </>
  );
};
