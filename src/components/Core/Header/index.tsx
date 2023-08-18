import { Avatar, Notification, Menu } from '@/icons';
import { Button, Logo } from '@/components/Atoms';

export default function Header() {
  return (
    <header>
      <div className="mobile-header">
        <i>
          <Menu className="icon menu" />
        </i>
        <Logo />
        <i>
          <Avatar className="icon avatar" />
        </i>
      </div>

      <div className="desktop-header">
        <div className="app-actions">
          <Logo />
          <Button
            text="Agregar película"
            icon="plus"
            variant="ghost"
            action={() => console.log('hola')}
          />
        </div>
        <div className="user-actions">
          <i>
            <Menu/>
          </i>
          <i>
            <Notification/>
          </i>
          <i>
            <Avatar className="avatar" />
          </i>
        </div>
      </div>
    </header>
  );
}
