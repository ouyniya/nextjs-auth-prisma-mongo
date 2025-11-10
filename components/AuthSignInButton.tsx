import { useFormStatus } from "react-dom";

const AuthSignInButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      type="submit"
      className="bg-rose-600 hover:cursor-pointer hover:bg-rose-500 duration-300 w-full mx-auto px-4 py-2 text-white rounded-lg"
    >
      {pending ? <span>Loading...</span> : <span>Sign in</span>}
    </button>
  );
};
export default AuthSignInButton;
