import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  const onSubmit = handleSubmit((values) => {
    signup(values);
  });

  return (
    <div className="max-w-xl mx-auto pt-8">
      {registerErrors.map((error, index) => (
        <div
          key={index}
          className="bg-red-800 mx-4 p-2 rounded-md text-white mb-2"
        >
          {error}
        </div>
      ))}
      <form onSubmit={onSubmit} className="p-4 mb-4">
        <h1 className="text-3xl font-bold text-white mb-3">Register</h1>
        <div>
          <label
            htmlFor="email"
            className="block my-2 text-lg font-medium text-gray-900 dark:text-white"
          >
            Your usename
          </label>
          <input
            type="text"
            autoFocus
            placeholder="usename"
            className="p-3 w-full mb-1 bg-slate-300 rounded-md"
            {...register("username", { required: true })}
          />{" "}
          {errors.username && (
            <p className="text-red-500 text-sm">Username is required</p>
          )}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block my-2 text-lg font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            autoFocus
            placeholder="example@gmail.com"
            className="p-3 w-full mb-1 bg-slate-300 rounded-md"
            {...register("email", { required: true })}
          />{" "}
          {errors.email && (
            <p className="text-red-500 text-sm">Email is required</p>
          )}
        </div>
        <div>
          <label
            htmlFor="password"
            className="block my-2 text-lg font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input
            type="password"
            placeholder="********"
            className="p-3 w-full mb-1 bg-slate-300 rounded-md"
            {...register("password", { required: true })}
          ></input>{" "}
          {errors.password && (
            <p className="text-red-500 text-sm">Password is required</p>
          )}
        </div>
        <div className="flex justify-between items-center pt-4">
          <button className="bg-indigo-500 px-3 py-2 text-white rounded-md">
            Register
          </button>
          <p className="text-sm text-gray-900 dark:text-white flex flex-col">
            Already have an account?
            <Link to="/login" className="font-medium flex justify-end">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default RegisterPage;
