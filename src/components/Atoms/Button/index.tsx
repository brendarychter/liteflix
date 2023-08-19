import { ButtonType } from '@/utils/types';
import { Play, Plus } from '@/icons';

export const Button = ({
  text,
  icon,
  variant,
  action
}: ButtonType): JSX.Element => {
  const handleClick = () => action();
  
  return (
    <button className={`custom-button ${variant}`} onClick={handleClick}>
      {/* TODO: icons by parameter */}
      {icon && <span className="button-icon">{icon === 'plus' ? <Plus /> : <Play />}</span>}
      {text}
    </button>
  );
};
