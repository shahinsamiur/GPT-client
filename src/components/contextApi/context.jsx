import React, { useState, createContext } from 'react';

import { callAPI } from '../../fuction/Apicall';
const UserContext = createContext();

function UserProvider({ children }) {
  const [modal, setModal] = useState(true);
  const [message_for_chatBox, setMessage_for_chatBox] = useState([]);


  const addMessage = async (message) => {
    setMessage_for_chatBox((prevMessages) => [...prevMessages, message]);
    // console.log("called");
  
    try {
      const res = await callAPI("http://localhost:4000/search", {
        data: message ,
      });
        
      setMessage_for_chatBox((prevMessages) => [...prevMessages, res.text]);
    } catch (error) {
      // Handle errors if needed
      console.error(error);
    }
  };



const typingAnimation=(message)=>{
  setMessage_for_chatBox(message[0])
  var loop=0
  const typingInterval =setInterval(() => {
    var updateMessage = message_for_chatBox
     updateMessage=updateMessage+message[loop]
     setMessage_for_chatBox(updateMessage)
    loop++
    if(loop===message.length){
      clearInterval(typingInterval)
    }
  }, 100);
}



  return (
    <UserContext.Provider value={{ modal, typingAnimation,setModal,message_for_chatBox, setMessage_for_chatBox, addMessage }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext };
