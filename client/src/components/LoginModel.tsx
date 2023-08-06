import { useForm } from "react-hook-form";
import { LoginCredentials } from "../network/authApi";
import * as AuthApi from "../network/authApi";
import { User } from "../network/model/User";

interface loginModelProps {
  onLoginSuccessful: (user: User) => void;
}

const LoginModel = ({ onLoginSuccessful }: loginModelProps) => {
  const { register, handleSubmit } = useForm<LoginCredentials>();

  async function onSubmit(credentials: LoginCredentials) {
    try {
      const user = await AuthApi.login(credentials);
      onLoginSuccessful(user);
    } catch (error) {
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
        </div>

        <div className="w-full flex items-center justify-between mt-7 mb-4">
          <div className="w-full flex items-center">
            <input type="checkbox" className="w-4 h-4 mr-2" />
            <p className="text-sm">Remember me for 30 days</p>
          </div>

          <p className="text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2">
            Forgot Password
          </p>
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
    </div>
  );
};

export default LoginModel;
