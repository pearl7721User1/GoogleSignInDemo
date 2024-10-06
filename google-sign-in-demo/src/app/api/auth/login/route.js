// app/api/auth/login/route.js
import { NextResponse } from 'next/server';

export async function GET() {
  const clientID = "903904710731-12k3g72oi86vheq6faclpe536l3avks7.apps.googleusercontent.com";
//  const redirectURI = "http://localhost:3000/api/auth/callback"; // Change based on your setup
  const redirectURI = "https://google-sign-in-demo.vercel.app/api/auth/callback";
  const scope = "openid profile email";
  const state = Math.random().toString(36).substring(7); // CSRF prevention

  // Construct the Google OAuth2 authorization URL
  const authURL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientID}&redirect_uri=${redirectURI}&response_type=code&scope=${scope}&state=${state}`;

  return NextResponse.redirect(authURL);
}
