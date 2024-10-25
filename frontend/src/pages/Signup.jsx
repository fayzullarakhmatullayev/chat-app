const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0">
        <h2 className="text-3xl font-semibold text-center text-gray-300">
          Signup <span className="text-blue-500">Chat App</span>
        </h2>
        <form>
          <div>
            <label className="label p-2" htmlFor="fullName">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter full name"
              className="w-full input input-bordered h-10"
              id="fullName"
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
            />
          </div>
          <div>
            <label className="label p-2" htmlFor="gender">
              <span className="text-base label-text">Select Gender</span>
            </label>
            <select
              className="w-full select select-bordered select-sm h-10"
              id="gender"
              defaultValue="male"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
            Already have an account? Login
          </a>
          <div>
            <button className="btn btn-block btn-sm mt-2" type="submit">
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
