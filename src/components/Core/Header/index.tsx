import { Avatar, Notification, Menu } from '@/icons';
import { Button, Logo } from '@/components/Atoms';
import { useModal } from '@/context/ModalContext';
import { useNavbarContext } from '@/context/NavbarContext';

export default function Header() {
  const { toggleModal, isModalOpen } = useModal();
  const { toggleNavbar, isNavbarOpen } = useNavbarContext();
  const icons = [
    { icon: <Notification />, className: 'icon' },
    { icon: <Avatar className="avatar" />, className: 'icon' }
  ];

  const reset = () => {
    isModalOpen && toggleModal();
    isNavbarOpen && toggleNavbar();
  };

  return (
    <header>
      <div className="mobile-header">
        {isModalOpen || isNavbarOpen ? (
          <span className="icon">
            <Button variant="ghost" icon="close" action={reset} />
          </span>
        ) : (
          <span className="icon">
            <Menu className="menu" onClick={toggleNavbar} />
          </span>
        )}
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
            action={toggleModal}
          />
        </div>
        <div className="user-actions">
          {isNavbarOpen ? (
            <span className="icon">
              <Button variant="ghost" icon="close" action={reset} />
            </span>
          ) : (
            <span className="icon menu">
              <Menu onClick={toggleNavbar} />
            </span>
          )}
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
