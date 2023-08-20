import { useState } from 'react';
import { useModal } from '@/context/ModalContext';
import { Button, Input, InputFile } from '@/components/Atoms';

const Modal = () => {
  const { isModalOpen, toggleModal } = useModal();
  const [title, setTitle] = useState<string>('');
  const [uploadedFile, setUploadedFile] = useState(null);
  // const reader = new FileReader();

  const handleFileUpload = (file: any) => {
    console.log(title)
    setUploadedFile(file);
  };

  const handleInputChange = (value: any) => {
    setTitle(value);
  };

  if (!isModalOpen) return null;

  const saveMovie = () => {
    console.log('save');
    // reader.onload = (event) => {
       // localStorage.setItem("file", event.target.result);
    // }
    
    // reader.readAsDataURL(blob);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-close">
          <Button variant="ghost" icon="close" action={toggleModal} />
        </div>
        <div className="modal-title">
          <h4>Agregar película</h4>
        </div>
        <div className="modal-input-file">
          <InputFile onFileUpload={handleFileUpload} />
        </div>
        <div className="modal-input">
          <Input value={title} onChange={handleInputChange}/>
        </div>
        <div className="modal-keypad">
          <Button
            text="Subir película"
            variant={uploadedFile && title ? 'success' : 'disabled'}
            // disabled={uploadedFile && title ? true : false}
            action={() => saveMovie()}
          />
          <Button text="Salir" variant="secondary" action={toggleModal} />
        </div>
      </div>
      {/* <div className="messages">
        <span> ¡Felicitaciones!</span>
        <span>{title} fue correctamente subida.</span>
        <Button text="Ir a home" variant="primary" action={toggleModal} />
      </div> */}
    </div>
  );
};

export default Modal;
