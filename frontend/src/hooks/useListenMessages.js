import { useEffect } from 'react';
import { useSocketContext } from '../context/SocketContext';
import useConversation from '../store/useConversation';
import notificationSound from '../assets/sounds/notification.mp3';
const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    socket?.on('newMessage', (message) => {
      message.shake = true;
      const sound = new Audio(notificationSound);
      sound?.play();
      setMessages([...messages, message]);
    });

    return () => socket?.off('newMessage');
  }, [socket, messages, setMessages]);
};

export default useListenMessages;
