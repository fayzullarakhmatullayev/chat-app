import { Link } from 'react-router-dom';
import useLogin from '../hooks/useLogin';
import { useState } from 'react';

const Login = () => {
  const [inputs, setInputs] = useState({
    username: '',
    password: ''
  });

  const { login, loading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0">
        <h2 className="text-3xl font-semibold text-center text-gray-300">
          Login <span className="text-blue-500">Chat App</span>
        </h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2" htmlFor="username">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
              id="username"
              value={inputs.username}
              onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
            />
          </div>
          <div>
            <label className="label p-2" htmlFor="password">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
              id="password"
              value={inputs.password}
              onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            />
          </div>
          <Link
            to="/signup"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Don't have an account? Signup
          </Link>
          <div>
            <button className="btn btn-block btn-sm mt-2" type="submit" disabled={loading}>
              <span>Login</span> {loading && <span className="ml-2 loading loading-spinner"></span>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
