// hooks/useProtectedRoute.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../your-path-to-supabase';

const useProtectedRoute = (redirectPath = '/login') => {
  const router = useRouter();

  useEffect(() => {
    const checkAuthentication = async () => {
      // Check if the user is authenticated using Supabase
      const user = supabase.auth.user();
      if (!user) {
        router.push(redirectPath);
      }
    };

    checkAuthentication();
  }, [router, redirectPath]);
};

export default useProtectedRoute;
