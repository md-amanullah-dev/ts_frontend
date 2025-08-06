


'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import RestaurantFooter from '../_components/resturantFooter';
import RestaurantHeader from '../_components/resturantHeader';
import RestaurantLogin from '../_components/resturantLogin';
import RestaurantSignUp from '../_components/resturantSignup';

const Restaurant = () => {
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  // Auto-redirect to home if already logged in
  useEffect(() => {
    const token = localStorage.getItem("CMS_TOKEN");
    if (token) {
      router.push('/');
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <RestaurantHeader />

      <main className="flex-grow flex items-center justify-center bg-gradient-to-r from-yellow-100 to-orange-100 px-4 py-4">
        <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-2xl space-y-6">
          <h1 className="text-3xl font-bold text-center text-orange-600">
            {isLogin ? '🍽️ Restaurant Login' : '📝 Restaurant Signup'}
          </h1>

          {isLogin ? (
            <RestaurantLogin />
          ) : (
            <RestaurantSignUp onSuccess={() => setIsLogin(true)} />
          )}

          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-orange-600 font-semibold hover:underline transition"
              >
                {isLogin ? 'Sign Up' : 'Login'}
              </button>
            </p>
          </div>
        </div>
      </main>

      <RestaurantFooter />
    </div>
  );
};

export default Restaurant;

