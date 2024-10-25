import { useState } from 'react';
import useConversation from '../store/useConversation';
import toast from 'react-hot-toast';
import axios from 'axios';

export const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  const sendMessage = async (message) => {
    setLoading(true);
    try {
      const { data } = await axios.post(`/api/messages/send/${selectedConversation._id}`, message);
      setMessages([...messages, data]);
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, sendMessage };
};

export default useSendMessage;
