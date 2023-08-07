import { useForm } from "react-hook-form";
import { useState } from "react";
import { SignUpCredentials } from "../network/authApi";
import * as AuthApi from "../network/authApi";
import { User } from "../network/model/User";
import Modal from 'react-bootstrap/Modal';

interface signUpProps {
  onSignUpSuccessful: (user: User) => void;
}

const SignUpModel = ({ onSignUpSuccessful }: signUpProps) => {
  const { register, handleSubmit } = useForm<SignUpCredentials>();

  const [error, setError] = useState(false);
  const handleClose = () => setError(false);

  async function onSubmit(credentials: SignUpCredentials) {
    try {
      const user = await AuthApi.signUp(credentials);
      onSignUpSuccessful(user);
    } catch (error) {
      setError(true);
      console.log(error); // set error here
    }
  }

  return (
    <div className="w-full flex flex-col max-w-[500px] text-center">
      <div className="w-full flex flex-col mb-10">
        <h3 className="text-5xl font-semibold mb-10">Sign Up</h3>
        <p className="text-base mb-2 text-l">Register a new user here!</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full flex flex-col">
          <input
            className="w-full text-black border-b border-black outline-none focus:outline-none py-2 my-2 bg-transparent"
            type="name"
            placeholder="Name"
            {...register("name")}
          />
          <input
            className="w-full text-black border-b border-black outline-none focus:outline-none py-2 my-2 bg-transparent"
            type="email"
            placeholder="Email"
            {...register("email")}
          />
          <input
            className="w-full text-black border-b border-black outline-none focus:outline-none py-2 my-2 bg-transparent"
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          <input
            className="w-full text-black border-b border-black outline-none focus:outline-none py-2 my-2 bg-transparent"
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword")}
          />
        </div>
        {error && <p className="text-sm text-left text-red-400 mt-2">&#9737; Invalid Credentials</p>}
        <div className="w-full flex flex-col my-4">
          <button
          type = "submit"
          className="w-full text-white my-2 font-semibold bg-[#060606] rounded-md p-4 text-center flex items-center justify-center cursor-pointer">
            Sign Up
          </button>
        </div>
      </form>
      {/* <Modal show={error} onHide={handleClose}>
        <Modal.Header>
        <Modal.Title>Sign Up Failed</Modal.Title>
        </Modal.Header>
        <Modal.Body>Invalid credentials, please try again.
        </Modal.Body>
      </Modal> */}
    </div>
  );
};

export default SignUpModel;
