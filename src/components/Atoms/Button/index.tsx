import { ButtonType } from '@/utils/types';
import { Close, Play, Plus } from '@/icons';

export const Button = ({
  text,
  icon,
  variant,
  action,
  disabled
}: ButtonType): JSX.Element => {
  const handleClick = () => action();

  const setIcon = (icon: string) => {
    // TODO: refactor for dinamic setting
    switch (icon) {
      case 'plus':
        return <Plus />;
      case 'close':
        return <Close />;
      case 'play':
        return <Play />;
      default:
        break;
    }
  };

  return (
    <button disabled={disabled} className={`custom-button ${variant}`} onClick={handleClick}>
      {icon && (
        <span className="button-icon">
          {icon && setIcon(icon)}
        </span>
      )}
      {text}
    </button>
  );
};
