import { useNavbarContext } from '../../../context/NavbarContext';

import { Button } from '@/components/Atoms';
import { useModal } from '@/context/ModalContext';

const Navbar = () => {
  const { isNavbarOpen, toggleNavbar } = useNavbarContext();
  const { toggleModal, isModalOpen } = useModal();

  const showModal = () => {
    if (!isModalOpen) {
      toggleModal();
      toggleNavbar();
    }
  };

  return (
    <nav className={`navbar ${isNavbarOpen ? 'open' : ''}`}>
      <ul>
        <li>Inicio</li>
        <li>Series</li>
        <li>Películas</li>
        <li>Agregadas recientemente</li>
        <li>Populares</li>
        <li>Mis películas</li>
        <li>Mi lista</li>
        <li>
          <Button
            text="Agregar película"
            icon="plus"
            variant="ghost"
            action={showModal}
          />
        </li>
        <li>Cerrar sesión</li>
      </ul>
    </nav>
  );
};

export default Navbar;
