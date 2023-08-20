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

  const handleDrop = (e: any) => {
    e.preventDefault();
    setIsDraggingOver(false);

    const file = e.dataTransfer.files[0];
    if (file) {
      onFileUpload(file);
    }
  };

  const handleFileInputChange = (e: any) => {
    const file = e.target.files[0];
    console.log(file);
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
        style={{display: 'none'}}
      />
    </div>
  );
};

export default InputFile;
