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

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt={userName} src={profilePic} />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor}`}>{message.message}</div>
      <div className="chat-footer">
        <time className="text-xs">{extractTime(message.createdAt)}</time>
      </div>
    </div>
  );
};

export default Message;
