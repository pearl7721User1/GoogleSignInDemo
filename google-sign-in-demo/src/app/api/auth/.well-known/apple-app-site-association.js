// pages/api/.well-known/apple-app-site-association.js
export default function handler(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send({
      applinks: {
        apps: [],
        details: [
          {
            appID: "K2APH36C6M.com.UniversalLinkTestApp", // Replace with your app's team ID and bundle ID
            paths: ["/dashboard"]
          }
        ]
      }
    });
  }
  