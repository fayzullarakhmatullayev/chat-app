import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async (inputs) => {
    const success = handleInputError(inputs);
    if (!success) return;
    setLoading(true);
    try {
      const { data } = await axios.post('/api/auth/login', inputs);
      localStorage.setItem('chat-user', JSON.stringify(data));
      setAuthUser(data);
      toast.success('Logged in successfully');
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

function handleInputError(inputs) {
  if (!inputs.username) {
    toast.error('Username is required');
    return false;
  }
  if (!inputs.password) {
    toast.error('Password is required');
    return false;
  }
  return true;
}

export default useLogin;
