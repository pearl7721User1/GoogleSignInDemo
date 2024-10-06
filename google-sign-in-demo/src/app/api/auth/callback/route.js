// app/api/auth/callback/route.js
import { NextResponse } from 'next/server';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get('code');

  if (!code) {
    return NextResponse.json({ error: 'No authorization code received' }, { status: 400 });
  }

  const clientID = "903904710731-12k3g72oi86vheq6faclpe536l3avks7.apps.googleusercontent.com";
  const clientSecret = "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";
//  const redirectURI = "http://localhost:3000/api/auth/callback"; // Ensure it matches the one in login route
  const redirectURI = "https://google-sign-in-demo.vercel.app/api/auth/callback";

  
  const tokenURL = "https://oauth2.googleapis.com/token";
  const payload = new URLSearchParams({
    client_id: clientID,
    client_secret: clientSecret,
    code,
    grant_type: "authorization_code",
    redirect_uri: redirectURI,
  });

  const response = await fetch(tokenURL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: payload,
  });

  const tokens = await response.json();

  if (!response.ok) {
    return NextResponse.json(tokens, { status: 400 });
  }

  // Handle tokens, e.g., store them in session or cookies
  return NextResponse.json({ tokens });
}
