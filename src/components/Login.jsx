import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const [username, setUsername] = useState("");
  const [error, setError] = useState(false);
  const { signin } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    signin(username);
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <div className="card p-6">
        <h2 className="text-2xl font-bold text-center mb-6">
          Welcome to News App
        </h2>

        <p className="text-gray-600 mb-6 text-center">
          Enter your username to start receiving real-time news updates
        </p>

        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded-md mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="form-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-full">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
