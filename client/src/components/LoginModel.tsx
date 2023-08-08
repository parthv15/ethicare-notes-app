import { useForm } from "react-hook-form";
import { useState } from "react";
import { LoginCredentials } from "../network/authApi";
import * as AuthApi from "../network/authApi";
import { User } from "../network/model/User";
import Modal from 'react-bootstrap/Modal';

interface loginModelProps {
  onLoginSuccessful: (user: User) => void;
}

const LoginModel = ({ onLoginSuccessful }: loginModelProps) => {
  const { register, handleSubmit } = useForm<LoginCredentials>();

  const [error, setError] = useState(false);
  const handleClose = () => setError(false);
  const s = `sds`;

  const [errorColour, setErrorColour] = useState(false);


  async function onSubmit(credentials: LoginCredentials) {
    try {
      const user = await AuthApi.login(credentials);
      onLoginSuccessful(user);
    } catch (error) {
      setError(true);
      setErrorColour(true);
      console.log(error); // set error here
    }
  }
  return (
    <div className="w-full flex flex-col max-w-[500px] text-center">
      <div className="w-full flex flex-col mb-10">
        <h3 className="text-5xl font-semibold mb-10">Log In</h3>
        <p className="text-base mb-2 text-l">
          Welcome Back! Please enter your details.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full flex flex-col">
          <input
            
            className={`w-full text-black border-b ${errorColour ? 'border-red-600':'border-black'} outline-none focus:outline-none py-2 my-2 bg-transparent ${errorColour ? 'placeholder-red-400':''}`}
            type="email"
            placeholder="Email"
            {...register("email")}
          />
          <input
            className={`w-full text-black border-b ${errorColour ? 'border-red-600':'border-black'} outline-none focus:outline-none py-2 my-2 bg-transparent ${errorColour ? 'placeholder-red-400':''}`}
            type="password"
            placeholder="Password"
            {...register("password")}
          />
        </div>

        <div className="w-full flex flex-col my-4">
          <button
            type="submit"
            className="w-full text-white my-2 font-semibold bg-[#060606] rounded-md p-4 text-center flex items-center justify-center cursor-pointer"
          >
            Log in
          </button>
        </div>
      </form>
      <Modal show={error} onHide={handleClose}>
        <Modal.Header>
        <Modal.Title>Log In Failed</Modal.Title>
        </Modal.Header>
        <Modal.Body>Invalid credentials, please try again.
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default LoginModel;
