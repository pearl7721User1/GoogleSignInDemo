// app/dashboard/page.js

async function fetchUserData(name) {
    // Replace this with the actual user data fetching logic if needed
    return { name: name || 'User' };
  }
  
  export default async function Dashboard({ searchParams }) {
    const user = await fetchUserData(searchParams.name); // Get user data based on the query parameter
  
    return (
      <div style={{ padding: '20px' }}>
        <h1>Dashboard</h1>
        <h2>Welcome, {user.name}!</h2>
        <p>This is your dashboard where you can manage your profile and settings.</p>
        <button onClick={() => alert('Feature coming soon!')}>Manage Settings</button>
      </div>
    );
  }
  