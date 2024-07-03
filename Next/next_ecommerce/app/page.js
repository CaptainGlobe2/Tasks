"use client"

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
  const router =useRouter();
  const isLoggedIn = useSelector(state => state.auth.isAuthenticated);

  useEffect(() => {
    // Example of redirect if not logged in
    if (!isLoggedIn) {
      router.push('/home');
    }
  }, [isLoggedIn, router]);

  return (
    <div>
      <h1>Home Page</h1>
      {/* Content */}
    </div>
  );
};

export default Home;