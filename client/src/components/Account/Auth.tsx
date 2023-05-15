import { useState } from "react";
import { supabase } from "../../../config";

export default function Auth() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();

    setLoading(true);
    const { error } = await supabase.auth.signInWithOtp({ email });

    if (error) {
      alert(error.error_description || error.message);
    } else {
      alert("Check your email for the login link!");
    }
    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center h-screen m-5">
      <div className="bg-white rounded-lg shadow-lg p-3">
        <h1 className="text-2xl font-bold mb-4">Supabase + React</h1>
        <p className="text-gray-600 mb-4">
          Sign in via magic link with your email below
        </p>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <input
              className="border border-gray-300 rounded px-4 py-2 w-full"
              type="email"
              placeholder="Your email"
              value={email}
              required={true}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <button
              className="bg-blue-500 text-white rounded px-4 py-2 w-full"
              disabled={loading}
            >
              {loading ? <span>Loading</span> : <span>Send magic link</span>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
