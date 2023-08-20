import Modal from 'react-modal';

const AddMovie = ({ isOpen, onRequestClose }: any) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Example Modal"
      className="custom-modal"
      overlayClassName="custom-overlay"
    >
      <h2>Modal Content</h2>
      <p>This is the content of the modal.</p>
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default AddMovie;