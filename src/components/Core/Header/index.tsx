import { Avatar, Notification, Menu } from '@/icons';
import { Button, Logo } from '@/components/Atoms';

export default function Header() {
  const icons = [
    { icon: <Menu />, className: 'icon' },
    { icon: <Notification />, className: 'icon' },
    { icon: <Avatar className="avatar" />, className: 'icon' }
  ];

  return (
    <header>
      <div className="mobile-header">
        <span className="icon">
          <Menu className="menu" />
        </span>
        <Logo />
        <span className="icon">
          <Avatar className="avatar" />
        </span>
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
          {icons.map((item, index) => (
            <span key={index} className={item.className}>
              {item.icon}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}
