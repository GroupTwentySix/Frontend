import { useEffect, useState } from 'react';
import GuestCheckout from './GuestCheckout'; // Adjust this import path based on your structure
import MemberCheckout from './MemberCheckout'; // Adjust this import path based on your structure

export const metadata = {
  title: 'Vitality',
  description: 'Checkout page for Vitality',
};

export default function RootLayout({ children }) {
  const [isMember, setIsMember] = useState(false); // State to hold member status

  useEffect(() => {
    // Example: Check if a user is a member, e.g., through a cookie, session, or localStorage
    // This is just an example; adjust based on your actual auth system.
    const memberStatus = localStorage.getItem('isMember'); // or use cookies, context, etc.
    if (memberStatus === 'true') {
      setIsMember(true);
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {isMember ? <MemberCheckout /> : <GuestCheckout />}
      </body>
    </html>
  );
}

