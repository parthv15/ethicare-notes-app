const SignUpModel = () => {
  return (
    <div className="w-full flex flex-col max-w-[500px] text-center">
      <div className="w-full flex flex-col mb-10">
        <h3 className="text-5xl font-semibold mb-10">Sign Up</h3>
        <p className="text-base mb-2 text-l">Register a new user here!</p>
      </div>

      <div className="w-full flex flex-col">
        <input
          className="w-full text-black border-b border-black outline-none focus:outline-none py-2 my-2 bg-transparent"
          type="name"
          placeholder="Name"
        />
        <input
          className="w-full text-black border-b border-black outline-none focus:outline-none py-2 my-2 bg-transparent"
          type="email"
          placeholder="Email"
        />
        <input
          className="w-full text-black border-b border-black outline-none focus:outline-none py-2 my-2 bg-transparent"
          type="password"
          placeholder="Password"
        />
        <input
          className="w-full text-black border-b border-black outline-none focus:outline-none py-2 my-2 bg-transparent"
          type="password"
          placeholder="Confirm Password"
        />
      </div>

      <div className="w-full flex flex-col my-4">
        <button className="w-full text-white my-2 font-semibold bg-[#060606] rounded-md p-4 text-center flex items-center justify-center cursor-pointer">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignUpModel;
