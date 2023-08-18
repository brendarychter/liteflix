import { ButtonType } from '@/utils/types';
import { Play, Plus  } from '@/icons';

export const Button = ({
  text,
  icon,
  variant,
  action
}: ButtonType): JSX.Element => {
  return (
    <button className={`custom-button ${variant}`} onClick={action()}>
      {icon &&
        <i>{icon === 'plus' ? <Plus/> : <Play/>}</i>
      }
      {text}
    </button>
  );
};
