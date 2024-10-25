import { TiMessages } from 'react-icons/ti';

import Messages from './Messages';
import MessagesInput from './MessagesInput';
import useConversation from '../../store/useConversation';
import { useAuthContext } from '../../context/AuthContext';
import { useEffect } from 'react';
import { useSocketContext } from '../../context/SocketContext';

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(selectedConversation?._id);
  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);
  return (
    <div className="md:min-w-[650px] flex flex-col">
      {!selectedConversation ? (
        <NotChatSelected />
      ) : (
        <>
          <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className="label-text">To: </span>
            <span className="text-gray-900 font-bold">{selectedConversation.fullName}</span>
            <span className={`ml-2 label-text ${isOnline && 'text-green-500'}`}>
              {isOnline ? 'Online' : 'Offline'}
            </span>
          </div>
          <Messages />
          <MessagesInput />
        </>
      )}
    </div>
  );
};

const NotChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Wellcome 👋 {authUser.fullName} ❄️</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};

export default MessageContainer;
