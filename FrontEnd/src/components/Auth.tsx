import { Link } from "react-router-dom";
import Input from "./input";

const Auth = () => {
  return (
    <div className="flex justify-center flex-col h-screen">
      <div className="flex justify-center">
        <div>
          <div className="text-3xl font-extrabold">Create an Account </div>
          <div className="text-slate-400">
            Already have an account ?{" "}
            <Link className="underline" to={"/signin"}>
              Login
            </Link>
          </div>

          <Input label="name" placeholder="vasu dhasu" onChange={(e) => {}} />
        </div>
      </div>
    </div>
  );
};

export default Auth;
