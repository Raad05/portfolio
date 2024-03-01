"use client";

import { useEffect, useState } from "react";
import HomePage from "./homePage/page";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    });

    return () => clearTimeout(timeout);
  }, []);
  return (
    <main className="main">
      {loading ? (
        <div className="h-screen">
          <div className="flex justify-center mt-80 glow-load rounded-full w-10 mx-auto">
            <span className="loading loading-ring loading-lg"></span>
          </div>
        </div>
      ) : (
        <HomePage></HomePage>
      )}
    </main>
  );
}
