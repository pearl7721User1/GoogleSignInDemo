'use client';

import Image from "next/image";
import styles from "./page.module.css";

import Link from 'next/link';

// app/page.js
export default function Home() {
  const handleGoogleSignIn = () => {
    window.location.href = "/api/auth/login";
  };

  return (
    <div>
      <h1>Google OAuth2 with Next.js (App Router)</h1>
      <button onClick={handleGoogleSignIn}>Sign in with Google</button>
    </div>
  );
}
