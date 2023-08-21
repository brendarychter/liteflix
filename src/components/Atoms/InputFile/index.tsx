import { useState, useRef } from 'react';
import { File } from '@/icons';

export const InputFile = ({ onFileUpload }: any): JSX.Element => {
  const dropRef = useRef(null);
  const [isDraggingOver, setIsDraggingOver] = useState(false);

  const handleDragEnter = (e: any) => {
    e.preventDefault();
    setIsDraggingOver(true);
  };

  const handleDragLeave = (e: any) => {
    e.preventDefault();
    setIsDraggingOver(false);
  };

  const convertToBase64 = (file: any) => {
    const reader = new FileReader();
    reader.onload = (event: any) => {
      onFileUpload(file.name, event.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    setIsDraggingOver(false);

    const file = e.dataTransfer.files[0];
    if (file) {
      convertToBase64(file);
    }
  };

  const handleFileInputChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      onFileUpload(file);
    }
  };

  return (
    <div className={`file-upload ${isDraggingOver ? 'dragging-over' : ''}`}>
      <div
        className="drop-area"
        ref={dropRef}
        onDragOver={(e) => e.preventDefault()}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <File />
        <p>
          <span>Agregá un archivo </span>
          <span className="drag-and-drop">O agregalo y soltalo aquí</span>
        </p>
      </div>
      <input
        type="file"
        accept=".jpg, .jpeg, .png"
        onChange={handleFileInputChange}
        style={{visibility: 'hidden'}}
      />
    </div>
  );
};

export default InputFile;
