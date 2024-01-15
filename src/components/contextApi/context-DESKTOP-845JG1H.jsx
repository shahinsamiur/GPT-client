import React, { useState, createContext,useEffect } from 'react';

import { callAPI } from '../../fuction/callApi';
const UserContext = createContext();

function UserProvider({ children }) {
  const [modal, setModal] = useState(true);
  const [message_for_chatBox, setMessage_for_chatBox] = useState([]);



  const addMessage = async(message) => {
    setMessage_for_chatBox((prevMessages) => [...prevMessages, message]);
    console.log("called")
  

  };

useEffect(async() => {
  const res= await callAPI("http://localhost:4000/search",{
    data:message_for_chatBox[message_for_chatBox.length-1]
  })
  setMessage_for_chatBox((prevMessages) => [...prevMessages, res]);
  console.log(res)
}, [message_for_chatBox])




  return (
    <UserContext.Provider value={{ modal, setModal, message_for_chatBox, setMessage_for_chatBox, addMessage }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext };
