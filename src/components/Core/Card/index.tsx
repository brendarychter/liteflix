import { Movie } from '@/utils/types';
import { Play, Star } from '@/icons';

export const Card = ({
  title,
  imagePath,
  average,
  releaseYear
}: Movie): JSX.Element => {
  return (
    <div className="card">
      <div className="overlay">
        <div>

        </div>
      </div>
      <img
        className="path"
        alt={title}
        src={imagePath}
        loading="lazy"
      />
      <div className="movie-description">
        <span className="icon"><Play /></span>
        <span className="movie-title">{title}</span>
      </div>
    </div>
  );
};
