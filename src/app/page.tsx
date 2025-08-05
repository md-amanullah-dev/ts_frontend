
'use client';

import { useEffect, useState } from "react";

export default function Home() {

  const foodImages = [

    'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=1170&auto=format&fit=crop',
    'https://media.istockphoto.com/id/1158623408/photo/indian-hindu-veg-thali-food-platter-selective-focus.webp?a=1&b=1&s=612x612&w=0&k=20&c=WOCrpfQJRlyY9W84K4iAaIfJVCWbIs_UroFYKK9y1Qg=',
    'https://images.unsplash.com/photo-1487790343276-2fe56a7d9439?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fGZvb2R8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1496412705862-e0088f16f791?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1633327760690-d9bb0513f942?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D'

  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % foodImages.length);
    }, 5000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-100 to-orange-200 flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10">

        {/* Content Left */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold text-orange-600 leading-tight">
            🍔 Delivering <span className="text-orange-500">Deliciousness</span><br /> Straight to You
          </h1>

          <p className="text-lg text-gray-700">
            Order from your favorite restaurants, track your delivery live, and enjoy amazing food anytime, anywhere.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-4">
            <a
              href="/menu"
              className="px-6 py-3 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition"
            >
              Start Ordering
            </a>
            <a
              href="/restaurant"
              className="px-6 py-3 bg-white text-orange-600 border border-orange-400 rounded-full font-semibold hover:bg-orange-100 transition"
            >
              Partner as Restaurant
            </a>
          </div>
        </div>

        {/* Hero Right */}
        <div className="relative">
          <div className="bg-white/30 backdrop-blur-md rounded-3xl shadow-2xl p-4 md:p-6 ring-1 ring-orange-200">


            <img
              src={foodImages[currentIndex]}
              alt={`Food Image ${currentIndex + 1}`}
              className="rounded-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

