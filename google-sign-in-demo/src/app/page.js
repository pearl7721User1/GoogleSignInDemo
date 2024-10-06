'use client';

import Image from "next/image";
import styles from "./page.module.css";

import Link from 'next/link';

// app/page.js
export default function Home() {
  const handleGoogleSignIn = () => {
    // Redirect to the login endpoint
    const response = await fetch("/api/auth/login");

    // Get the response to redirect to the custom scheme
    const data = await response.json();

    // Check if redirectTo is in the response
    if (data.redirectTo) {
      // Redirect to the custom scheme
      window.location.href = data.redirectTo;

      // Optionally, fetch tokens from the server here if needed
    }
  };

  return (
    <div>
      <h1>Google OAuth2 with Next.js (App Router)</h1>
      <button onClick={handleGoogleSignIn}>Sign in with Google</button>
    </div>
  );
}
