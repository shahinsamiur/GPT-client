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
      const res = await callAPI("http://localhost:4000/GetMessage", {
        data: message,
      });
      setMessage_for_chatBox((prevMessages) => [...prevMessages, res.text]);
    } catch (error) {
      // Handle errors if needed
      setMessage_for_chatBox((prevMessages) => [...prevMessages, "there are some issu we are facing now, please reload the page or come back letter "]);
    }
  };





  return (
    <UserContext.Provider value={{ modal, setModal, message_for_chatBox, setMessage_for_chatBox, addMessage }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext };
