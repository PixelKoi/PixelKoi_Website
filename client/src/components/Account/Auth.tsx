import { useState } from "react";
import { supabase } from "../../../config";

const Auth = () => {
  //hooks
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (!error) {
    } else {
      alert(error.message);
    }
    setLoading(false);
  }

  async function signUpWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) alert(error.message);
    setLoading(false);
  }
  return (
    <div className="mt-4 p-5 bg-white">
      <div>
        <input
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="email@address.com"
          autoCapitalize={"none"}
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Password"
          autoCapitalize={"none"}
        />
      </div>
      <div>
        <button disabled={loading} onClick={() => signInWithEmail()}>
          Sign In
        </button>
      </div>
      <div>
        <button disabled={loading} onClick={() => signUpWithEmail()}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Auth;
