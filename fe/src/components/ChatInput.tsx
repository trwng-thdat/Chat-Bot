import { useState } from 'react';

type ChatInputProps = {
  onSendData: (data: string) => void;
};

const ChatInput = ({ onSendData }: ChatInputProps) => {
  const [inputText, setInputText] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent page reload
    if (inputText !== '') {
      onSendData(inputText);
      console.log('Send:', inputText);

      // Here you could add the message to your list or send it to a parent component
      setInputText(''); // clear input
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='h-9 mb-10 pl-5 pr-5 flex'>
        <input
          type='text'
          value={inputText}
          onChange={handleChange}
          placeholder='Send message to ChatBox'
          className='h-full border-2 border-solid rounded-lg w-[85%] pl-3.5'
        />
        <button
          type='submit'
          className='h-full w-[10%] bg-green-600 rounded-lg font-semibold text-lg text-white ml-2'
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default ChatInput;
