import { Link } from "react-router-dom";

const ForgetPassword = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-slate-200">
      <div className="w-1/2 py-20 px-20 bg-white rounded-md shadow-lg">
        <div>
          <h2 className="mb-4 text-center text-4xl">Set Password</h2>
          <p>
            If you continue, we'll send a message to the e-mail address in your
            profile. Click the link in the message, and enter a new password on
            the page that opens
          </p>
        </div>
        <form>
          <div className="my-4">
            <label className="block text-xl">Email</label>
            <input type="email" className="w-full p-1 border-2" />
          </div>
          <input
            type="submit"
            value="Send password reset email "
            className="w-full p-1 uppercase font-bold text-white bg-green-500 cursor-pointer hover:bg-green-400"
          />
        </form>
        <div className="mt-4">
          <Link to="/" className="hover:text-slate-400">
            Back to sing in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
