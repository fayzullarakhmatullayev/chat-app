import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signup = async (inputs) => {
    const success = handleInputError(inputs);
    if (!success) return;
    setLoading(true);
    try {
      const { data } = await axios.post('/api/auth/signup', inputs);

      localStorage.setItem('chat-user', JSON.stringify(data));
      setAuthUser(data);
      toast.success('Account created successfully');
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

function handleInputError(inputs) {
  if (
    !inputs.fullName ||
    !inputs.username ||
    !inputs.password ||
    !inputs.confirmPassword ||
    !inputs.gender
  ) {
    toast.error('Please fill in all fields');
    return false;
  }

  if (inputs.password !== inputs.confirmPassword) {
    toast.error('Passwords do not match');
    return false;
  }

  if (inputs.password.length < 6) {
    toast.error('Password must be at least 6 characters');
    return false;
  }

  return true;
}

export default useSignup;
