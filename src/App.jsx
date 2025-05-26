import { useContext } from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import NewsFeed from "./components/NewsFeed";
import { AuthContext } from "./context/AuthContext";
import PostProvider from "./providers/PostProvider";
import { ToastContainer } from "react-toastify";

function App() {
  // user ?
  const { user } = useContext(AuthContext);

  return (
    <PostProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-6">
          {!user ? <Login /> : <NewsFeed />}
        </main>
        <footer className="bg-gray-800 text-white py-4 text-center">
          <p className="text-sm">2025 News App with SSE</p>
        </footer>
      </div>
      <ToastContainer />
    </PostProvider>
  );
}

export default App;
