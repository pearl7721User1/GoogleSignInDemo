// app/dashboard/page.js
export default function Dashboard({ user }) {
    return (
      <div style={{ padding: '20px' }}>
        <h1>Dashboard</h1>
        <h2>Welcome, {user?.name || 'User'}!</h2>
        <p>This is your dashboard where you can manage your profile and settings.</p>
        {/* Add more content or features as needed */}
        <button onClick={() => alert('Feature coming soon!')}>Manage Settings</button>
      </div>
    );
  }
  
  // This is a placeholder function to get user information. Replace it with actual user data fetching logic.
  export async function getServerSideProps(context) {
    // Ideally, you'd fetch user information using the tokens or session stored after login.
    const user = {
      name: "John Doe", // Replace this with actual user data fetching logic
    };
  
    return {
      props: { user }, // Pass user data to the Dashboard component
    };
  }
  