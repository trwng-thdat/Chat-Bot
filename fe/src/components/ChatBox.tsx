import MessageBar from './MessageBar';
import ChatInput from './ChatInput';
import React from 'react';
// import ChatBot from '../assets/';
export type MessageType = {
  message: string;
  sender: string;
  id: number;
};

const ChatBox = () => {
  const [messageList, setMessageList] = React.useState<MessageType[]>([]);

  const sendMessage = (text: string) => {
    setMessageList((prev) => [
      ...prev,
      { message: text, sender: 'user', id: Date.now() },
    ]);

    const response = 'Hello Im a ChatBot';
    setMessageList((prev) => [
      ...prev,
      { message: response, sender: 'bot', id: Date.now() },
    ]);
  };

  return (
    <>
      <ChatInput onSendData={sendMessage} />
      {messageList.map((msg, index) => (
        <MessageBar
          key={index}
          id={msg.id}
          message={msg.message}
          sender={msg.sender}
        />
      ))}
    </>
  );
};

export default ChatBox;
