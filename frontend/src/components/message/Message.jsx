import { useAuthContext } from '../../context/AuthContext';
import useConversation from '../../store/useConversation';
import { extractTime } from '../../utils/extractTime';

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();

  const isMyMessage = authUser._id === message.senderId;

  const chatClassName = isMyMessage ? 'chat-end' : 'chat-start';
  const bubbleBgColor = isMyMessage ? 'bg-blue-500' : '';
  const profilePic = isMyMessage ? authUser.profilePic : selectedConversation?.profilePic;
  const userName = isMyMessage ? authUser.fullName : selectedConversation?.fullName;
  const shakeClass = message?.shake && 'shake';

  const errorUserImage = (e) => {
    const target = e.target;
    target.src = `https://ui-avatars.com/api/?name=${userName}&background=random`;
  };

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt={userName} src={profilePic} onError={errorUserImage} />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass}`}>
        {message.message}
      </div>
      <div className="chat-footer">
        <time className="text-xs">{extractTime(message.createdAt)}</time>
      </div>
    </div>
  );
};

export default Message;
