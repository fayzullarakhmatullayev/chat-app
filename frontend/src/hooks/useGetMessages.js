import { useEffect, useState } from 'react';
import useConversation from '../store/useConversation';
import axios from 'axios';
import toast from 'react-hot-toast';

export const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(`/api/messages/${selectedConversation._id}`);
        setMessages(data);
      } catch (error) {
        toast.error(error?.response?.data?.message || error.message);
      } finally {
        setLoading(false);
      }
    };
    selectedConversation?._id && getMessages();
  }, [selectedConversation?._id]);

  return { loading, messages };
};

export default useGetMessages;
