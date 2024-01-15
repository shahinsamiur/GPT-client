import React, { useContext, useEffect, useState, useRef } from 'react';
import Message from '../messageComponent/messageComponent';
import Input from '../inputComponents/input';
import { UserContext } from '../contextApi/context';
import WelcomeChatboxComponents from './welcomeChatboxComponents';
import "./chatBox.css";

function ChatBox() {
  const [messageData, setMessageData] = useState([]);
  const { message_for_chatBox } = useContext(UserContext);
  const chatBoxRef = useRef(null);

  useEffect(() => {
    setMessageData(message_for_chatBox);
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [message_for_chatBox]);

  return (
    <div className={`chat_scrollbar_hide_custom_css relative md:left-[20%] top-[10%] md:top-[12%] h-[80%] pb-5 w-[100%] bg-gray-800 overflow-y-auto md:w-[78%]  'h-auto'   text-white`} ref={chatBoxRef}>
      {
        messageData.map((data, index) => (
          <Message key={index} data={data} />
        ))
      }

      {messageData.length === 0 ? <WelcomeChatboxComponents /> : null}
      <div className='fixed top-[91%] w-[90%] left-4 md:left-[22%] md:w-[76%] bg-gray-700  h-auto block m-auto rounded-md'>
        <Input />
      </div>
    </div>
  );
}

export default ChatBox;
