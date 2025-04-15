import axios from "axios";
import { useEffect, useState } from "react";
// Removed: import { useParams } from "react-router-dom"; // Replaced with prop passing in Next.js
import { server } from "@/lib/server"; // Updated import path for Next.js structure (was "../server")

function ActivationUser({ activation_token }) { // Added prop to receive activation_token from Next.js route
  // Fixed: const { error, setError } = useState(false); // Incorrect destructuring syntax
  const [error, setError] = useState(false); // Corrected to array destructuring for useState

  useEffect(() => {
    if (activation_token) {
      const activationEmail = async () => {
        try {
          const res = await axios.post(`${server}/user/activation`, {
            activation_token,
          });
          console.log(res.data.message);
        } catch (error) {
          console.log(error);
          setError(true);
        }
      };
      activationEmail();
    }
  }, [activation_token]); // Removed dependency on useParams, now depends on prop

  return (
    <div className="w-full h-screen flex items-center justify-center p-4">
      {error ? (
        <p className="text-xl">Your token is expired</p>
      ) : (
        <p className="text-xl">Your account is created successfully</p>
      )}
    </div>
  );
}

export default ActivationUser;