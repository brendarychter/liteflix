import { useEffect, useState } from 'react';
import { useModal } from '@/context/ModalContext';
import { Button, Input, InputFile } from '@/components/Atoms';
import { useLocalStorage } from '@/context/LocalStorageContext';
import { v4 as uuidv4 } from 'uuid';

const Modal = () => {
  const { isModalOpen, toggleModal } = useModal();
  const [title, setTitle] = useState<string>('');
  const [uploadedFile, setUploadedFile] = useState<any>();
  const { addItem } = useLocalStorage();
  const [success, setSuccess] = useState<boolean>(false);

  const handleFileUpload = (fileName: any, base64Data: any) => {
    const updatedFileData = {
      fileName,
      imagePath: base64Data,
      id:  uuidv4()
    };
    setUploadedFile(updatedFileData);
  };

  const handleInputChange = (value: string) => {
    setTitle(value);
  };

  if (!isModalOpen) return null;

  const saveMovie = () => {
    const updatedFile = {...uploadedFile, title: title}
    setUploadedFile(updatedFile)
    addItem(updatedFile);
    setSuccess(true);
  };

  const closeModal = () => {
    toggleModal();
    setTitle('');
    setSuccess(false);
  };

  const isDisabled = () => {
    return uploadedFile === undefined || title.trim() === ''
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-close">
          <Button variant="ghost" icon="close" action={closeModal} />
        </div>
        {success ? (
          <div className="messages">
            <div> ¡Felicitaciones!</div>
            <div>{title} fue correctamente subida.</div>
            <Button text="Ir a home" variant="success" action={closeModal} />
          </div>
        ) : (
          <>
            <div className="modal-title">
              <h4>Agregar película</h4>
            </div>
            <div className="modal-input-file">
              <InputFile onFileUpload={handleFileUpload} />
            </div>
            <div className="modal-input">
              <Input value={title} onChange={handleInputChange} />
            </div>
            <div className="modal-keypad">
              <Button
                text="Subir película"
                variant={
                  isDisabled() ? 'disabled' : 'success'
                }
                disabled={isDisabled()}
                action={() => saveMovie()}
              />
              <Button text="Salir" variant="secondary" action={closeModal} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
