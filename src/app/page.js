'use client'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useUser } from '@clerk/nextjs';

const IndexPage = () => {
  const { isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    // Redirect user based on authentication status
    if (isSignedIn) {
      router.replace('/home'); // Redirect to /home if logged in
    } else {
      router.push('/auth'); // Redirect to /auth if not logged in
    }
  }, [isSignedIn, router]);

  // Optionally, show a loading state while redirecting
  return <div>Loading...</div>;
};

export default IndexPage;
