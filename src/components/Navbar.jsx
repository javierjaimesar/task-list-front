import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();

  console.log(user?.username);

  return (
    <div className="mx-auto">
      <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        <p className="text-lg sm:text-xl font-semibold	text-white">
          Welcome {user?.username}
        </p>
        <button
          onClick={logout}
          className="bg-indigo-500 px-3 py-2 text-white rounded-md"
        >
          <Link to={"/login"}>Logout</Link>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
