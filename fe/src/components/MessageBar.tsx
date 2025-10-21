import type { MessageType } from './ChatBox';
import userPhoto from '../assets/user.png';
import botPhoto from '../assets/robot.png';

const MessageBar = ({ message, sender }: MessageType) => {
  const isUser = sender === 'user';
  let photo;

  if (sender === 'user') photo = userPhoto;
  else photo = botPhoto;
  return (
    <div className={`flex mb-8 ${isUser ? 'flex-row-reverse' : null}`}>
      <img src={photo} alt='avatar' className='w-10 h-10' />
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
