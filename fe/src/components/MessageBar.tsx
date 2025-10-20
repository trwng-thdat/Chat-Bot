import type { MessageType } from './ChatBox';

const MessageBar = ({ message, sender }: MessageType) => {
  let path = '../../public/';
  const isUser = sender === 'user';

  if (sender === 'user') path += path + 'user.png';
  else path += path + 'robot.png';
  return (
    <div className={`flex mb-8 ${isUser ? 'flex-row-reverse' : null}`}>
      <img src={path} alt='avatar' className='w-10 h-10' />
      <p
        className={`ml-5 mr-5 rounded-xl p-3 bg-zinc-300 ${
          isUser ? 'ml-30' : 'mr-30'
        }`}
      >
        {message}
      </p>
    </div>
  );
};

export default MessageBar;
