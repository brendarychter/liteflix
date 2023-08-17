import { ReactComponent as Menu } from '../../../icons/menu.svg';
import { ReactComponent as Bell } from '../../../icons/bell.svg';
import { ReactComponent as Avatar } from '../../../icons/avatar.svg';
import { Logo } from '../../../components/Atoms/Logo';

export default function Header() {
  return (
    <header>
      <div className="mobile-header">
        <Menu className="icon menu" />
        <Logo />
        <Avatar className="icon avatar" />
      </div>

      <div className="desktop-header">
        <Logo />
        <button>Agregar película</button>
        <Menu className="icon menu" />
        <Bell className="icon bell" />
        <Avatar className="icon avatar" />
      </div>
    </header>
  );
}
