'use client';

import { ApiResult } from '@/utils/api-common';
import featuredFetch from '@/utils/featured-fetch';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; 

interface RestaurantSignUpProps {
  onSuccess: () => void; // used to switch to login view
}

const RestaurantSignUp = ({ onSuccess }: RestaurantSignUpProps) => {
    const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    restaurantName: '',
    city: '',
    address: '',
    contactNumber: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

// const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (formData.password !== formData.confirmPassword) {
//       alert("Passwords don't match");
//       return;
//     }

//     try {
//       const response = await featuredFetch<ApiResult<any>>({
//         input: 'user/signup',
//         init: {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             email: formData.email,
//             password: formData.password,
//             restaurantName: formData.restaurantName,
//             city: formData.city,
//             address: formData.address,
//             contactNumber: formData.contactNumber,
//           }),
//         },
//         tokenValidation: false,
//       });

//       console.log('Signup success:', response);
//       alert('Signup successful! Redirecting to login...');
//       router.push('/resturant'); // ✅ Redirect to login page
//     } catch (error) {
//       console.error('Signup error:', error);
//       alert(error || 'Signup failed');
//     }
//   };



const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (formData.password !== formData.confirmPassword) {
    alert("Passwords don't match");
    return;
  }

  try {
    const response = await featuredFetch<ApiResult<any>>({
      input: 'user/signup',
      init: {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          restaurantName: formData.restaurantName,
          city: formData.city,
          address: formData.address,
          contactNumber: formData.contactNumber,
        }),
      },
      tokenValidation: false,
    });

    console.log('Signup success:', response);
    alert('Signup successful! Redirecting to login...');
    onSuccess(); // ✅ Switch to login form
  } catch (error) {
    console.error('Signup error:', error);
    alert(error || 'Signup failed');
  }
};
  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Restaurant Name</label>
          <input
            name="restaurantName"
            type="text"
            required
            onChange={handleChange}
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
            placeholder="Tasty Treats"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            name="email"
            type="email"
            required
            onChange={handleChange}
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
            placeholder="email@example.com"
          />
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">City</label>
            <input
              name="city"
              type="text"
              required
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
              placeholder="Delhi"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">Contact Number</label>
            <input
              name="contactNumber"
              type="tel"
              required
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
              placeholder="9876543210"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Full Address</label>
          <input
            name="address"
            type="text"
            required
            onChange={handleChange}
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
            placeholder="Street, Area, Pincode"
          />
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              name="password"
              type="password"
              required
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
              placeholder="••••••••"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              name="confirmPassword"
              type="password"
              required
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
              placeholder="••••••••"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg transition duration-300"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default RestaurantSignUp;
