import React ,{useState}from 'react'
import ChatBox from '../../components/chatBox/chatBox'
import Modal from './modal';
import ReactDOM from 'react-dom';
export default function HomePage() {

  const [isModalOpen, setIsModalOpen] = useState(true);

  // const openModal = () => {
  //   setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };


  return (
    <div className='absolute w-screen h-screen bg-gray-800 overflow-hidden'>
       {isModalOpen &&
        ReactDOM.createPortal(
          <Modal >
            {/* Modal content goes here */}
            <h2>Hello, I'm a Modal!</h2>
          </Modal>,
          document.getElementById('modal-root')
        )}
      <ChatBox />

    </div>

  )
}
