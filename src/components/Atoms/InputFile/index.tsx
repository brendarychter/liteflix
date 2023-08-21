import { useState, useRef } from 'react';
import { File } from '@/icons';
import { FileInfo, FileStatusAction } from '@/utils/types';

export const InputFile = ({ onFileUpload }: any): JSX.Element => {
  const dropRef = useRef(null);
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState(FileInfo.LOADING);
  const [statusAction, setStatusAction] = useState(FileStatusAction.CANCEL);

  const reader = new FileReader();

  const handleDragEnter = (e: any) => {
    e.preventDefault();
    setIsDraggingOver(true);
  };

  const handleDragLeave = (e: any) => {
    e.preventDefault();
    setIsDraggingOver(false);
  };

  const convertToBase64 = (file: any) => {
    reader.onloadstart = () => {
      setLoading(true);
    };

    reader.onload = (event: any) => {
      onFileUpload(file.name, event.target.result);

      let currentProgress = 0;
      const interval = setInterval(() => {
        if (currentProgress < 100) {
          currentProgress += 1;
          setProgress(currentProgress);
        } else {
          setMessage(FileInfo.LOADED);
          setStatusAction(FileStatusAction.READY);
          clearInterval(interval);
        }
      }, 30);
    };

    reader.onloadend = () => {
      console.log('error');
    };

    reader.onerror = () => {
      setMessage(FileInfo.ERROR);
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
      convertToBase64(file);
    }
  };

  return (
    <>
      {loading ? (
        <div className="progress-status">
          <div className="message-loading">
            {message} <span> {progress} %</span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="status-action">
            <span>{statusAction}</span>
          </div>
        </div>
      ) : (
        <div className={`file-upload ${isDraggingOver ? 'dragging-over' : ''}`}>
          <div
            className="drop-area"
            ref={dropRef}
            onDragOver={(e) => e.preventDefault()}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="file-container">
              <label className="file-label">
                <File />
                <span>
                  <span>Agregá un archivo </span>
                  <span className="drag-and-drop">
                    O agregalo y soltalo aquí
                  </span>
                </span>
                <input
                  type="file"
                  accept=".jpg, .jpeg, .png, .svg"
                  onChange={handleFileInputChange}
                />
              </label>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InputFile;
