'use client';

import { useState } from 'react';
import Link from '../../../node_modules/next/link';
import RestaurantFooter from '../_components/resturantFooter';
import RestaurantHeader from '../_components/resturantHeader';

type Restaurant = {
  id: number;
  name: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  image: string;
};

const dummyRestaurants: Restaurant[] = [
  
    {
      id: 1,
      name: "Spice Hub",
      cuisine: "Indian",
      rating: 4.5,
      deliveryTime: "30 mins",
      image: "https://media.istockphoto.com/id/1131393938/photo/very-stylish-indian-gourmet-restaurant.jpg?s=1024x1024&w=is&k=20&c=CvWiTQ4b53qyCuqxL-_jJi2v5fBgE-i_t-3p9qtUpBw="
    },
    {
      id: 2,
      name: "Pasta Palace",
      cuisine: "Italian",
      rating: 4.2,
      deliveryTime: "25 mins",
      image: "https://media.istockphoto.com/id/1138328563/photo/photo-of-luxurious-restaurant-indoor.jpg?s=1024x1024&w=is&k=20&c=uIimo4ns_BtgO2mUtz01drtonQdF1CfZAJ0IeAWk0c4="
    },
    {
      id: 3,
      name: "Sushi World",
      cuisine: "Japanese",
      rating: 4.8,
      deliveryTime: "40 mins",
      image: "https://media.istockphoto.com/id/500363479/photo/tables-set-for-meal.jpg?s=1024x1024&w=is&k=20&c=ks2wsyLzTFPEu--VWVuqwyRREkuxWcLYckv2lsPsPyc="
    },
    {
      id: 4,
      name: "Burger Barn",
      cuisine: "American",
      rating: 4.1,
      deliveryTime: "20 mins",
      image: "https://media.istockphoto.com/id/175385755/photo/casual-modern-restaurant.jpg?s=1024x1024&w=is&k=20&c=xqiApBkTJ2igMT_qoo475jfBcbQVBCEIGqZov7oa57o="
    },
    {
      id: 5,
      name: "Dragon Delight",
      cuisine: "Chinese",
      rating: 4.3,
      deliveryTime: "35 mins",
      image: "https://media.istockphoto.com/id/966381484/photo/photo-of-luxurious-restaurant-indoor.jpg?s=612x612&w=0&k=20&c=wxP84IILYWbWACOly78-N9GPwNuw5RWKWqSNhW_0TUY="
    },
    {
      id: 6,
      name: "Taco Town",
      cuisine: "Mexican",
      rating: 4.0,
      deliveryTime: "22 mins",
      image: "https://media.istockphoto.com/id/466211886/photo/bright-restaurant-interior.jpg?s=612x612&w=0&k=20&c=z-ArDJebYd7lGaZ_GWj_MiMd5HhK77_jYyC7y70ibbI="
    },
    {
      id: 7,
      name: "The Curry Leaf",
      cuisine: "Indian",
      rating: 4.6,
      deliveryTime: "28 mins",
      image: "https://media.istockphoto.com/id/466211886/photo/bright-restaurant-interior.jpg?s=612x612&w=0&k=20&c=z-ArDJebYd7lGaZ_GWj_MiMd5HhK77_jYyC7y70ibbI="
    },
    {
      id: 8,
      name: "Pizza Point",
      cuisine: "Italian",
      rating: 4.4,
      deliveryTime: "18 mins",
      image: "https://media.istockphoto.com/id/186586176/photo/luxury-restaurant-in-european-style.jpg?s=612x612&w=0&k=20&c=yoI58_kilHHWCpucAnhglkYJSb5DQppRVTfZOqXRGd8="
    },
    {
      id: 9,
      name: "Ramen Realm",
      cuisine: "Japanese",
      rating: 4.7,
      deliveryTime: "32 mins",
      image: "https://media.istockphoto.com/id/876906698/photo/interior-of-a-hotel-restaurant.jpg?s=612x612&w=0&k=20&c=qhfeGdJjxz_Vihyotc1aDG1OufmEKtGJyX7qNIKAf3g="
    },
    {
      id: 10,
      name: "BBQ Brothers",
      cuisine: "American",
      rating: 4.3,
      deliveryTime: "26 mins",
      image: "https://media.istockphoto.com/id/876906698/photo/interior-of-a-hotel-restaurant.jpg?s=612x612&w=0&k=20&c=qhfeGdJjxz_Vihyotc1aDG1OufmEKtGJyX7qNIKAf3g="
    },
    {
      id: 11,
      name: "Wok This Way",
      cuisine: "Chinese",
      rating: 4.1,
      deliveryTime: "24 mins",
      image: "https://media.istockphoto.com/id/1286926911/photo/3d-render-modern-cafe-and-restaurant-interior.jpg?s=612x612&w=0&k=20&c=ASxppIVceOPs3TqF7Irl-rFP7wfhsCCKtGuiGQlrr9s="
    },
    {
      id: 12,
      name: "Casa Mexicana",
      cuisine: "Mexican",
      rating: 4.5,
      deliveryTime: "27 mins",
      image: "https://media.istockphoto.com/id/529916515/photo/european-restaurant-in-bright-colors.jpg?s=612x612&w=0&k=20&c=pPZTFp6b8FSXIa0dAVW52V9gsBZnUfB7MhV_yLSDUsE="
    },
    
  ];
  

const Restaurant = () => {
  const [selectedCuisine, setSelectedCuisine] = useState<string | null>(null);

  const filteredRestaurants = selectedCuisine
    ? dummyRestaurants.filter(r => r.cuisine === selectedCuisine)
    : dummyRestaurants;

  return (
    <div className="min-h-screen flex flex-col">
      <RestaurantHeader />

      <main className="flex-grow bg-gradient-to-r from-yellow-100 to-orange-100 px-4 py-8">
        {/* Filters */}
        <div className="mb-6 flex flex-wrap gap-4 justify-center">
          {["All", "Indian", "Italian", "Japanese", "American"].map((cuisine) => (
            <button
              key={cuisine}
              className={`px-4 py-2 rounded-full text-sm font-medium shadow ${
                selectedCuisine === cuisine || (cuisine === "All" && !selectedCuisine)
                  ? "bg-orange-500 text-white"
                  : "bg-white text-gray-700 hover:bg-orange-200"
              }`}
              onClick={() => setSelectedCuisine(cuisine === "All" ? null : cuisine)}
            >
              {cuisine}
            </button>
          ))}
        </div>

        {/* Restaurant Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredRestaurants.map((restaurant) => (
            <Link href={`/resturant/${restaurant.id}`}>
            <div
              key={restaurant.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{restaurant.name}</h2>
                <p className="text-sm text-gray-500">{restaurant.cuisine}</p>
                <div className="mt-2 flex justify-between text-sm text-gray-600">
                  <span>⭐ {restaurant.rating}</span>
                  <span>{restaurant.deliveryTime}</span>
                </div>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </main>

      <RestaurantFooter />
    </div>
  );
};

export default Restaurant;
