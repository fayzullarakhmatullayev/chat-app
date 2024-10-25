import { useState } from 'react';
import { Link } from 'react-router-dom';
import useSignup from '../hooks/useSignup';

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: 'male'
  });

  const { signup, loading } = useSignup();

  const submitHandler = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0">
        <h2 className="text-3xl font-semibold text-center text-gray-300">
          Signup <span className="text-blue-500">Chat App</span>
        </h2>
        <form onSubmit={submitHandler}>
          <div>
            <label className="label p-2" htmlFor="fullName">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter full name"
              className="w-full input input-bordered h-10"
              id="fullName"
              value={inputs.fullName}
              onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
            />
          </div>
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
          <div>
            <label className="label p-2" htmlFor="confirmPassword">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter confirm password"
              className="w-full input input-bordered h-10"
              id="confirmPassword"
              value={inputs.confirmPassword}
              onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
            />
          </div>
          <div>
            <label className="label p-2" htmlFor="gender">
              <span className="text-base label-text">Select Gender</span>
            </label>
            <select
              className="w-full select select-bordered select-sm h-10"
              id="gender"
              value={inputs.gender}
              onChange={(e) => setInputs({ ...inputs, gender: e.target.value })}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <Link
            to="/login"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Already have an account? Login
          </Link>
          <div>
            <button className="btn btn-block btn-sm mt-2" type="submit" disabled={loading}>
              <span>Signup</span>
              {loading && <span className="ml-2 loading loading-spinner"></span>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
