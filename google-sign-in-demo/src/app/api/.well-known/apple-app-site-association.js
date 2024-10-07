// app/api/.well-known/apple-app-site-association/route.js
export async function GET(req) {
  const response = {
    applinks: {
      apps: [],
      details: [
        {
          appID: "K2APH36C6M.com.UniversalLinkTestApp", // Replace with your app's team ID and bundle ID
          paths: ["/dashboard"], // Define the paths you want to handle
        },
      ],
    },
  };

  return new Response(JSON.stringify(response), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

  