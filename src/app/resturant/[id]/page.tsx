
// 'use client';

// import { useParams } from 'next/navigation';
// import { useState } from 'react';
// import RestaurantHeader from '../../_components/resturantHeader';
// import RestaurantFooter from '../../_components/resturantFooter';

// // --- DUMMY RESTAURANT DATA (Keep your original dummyRestaurants here) ---
// const dummyRestaurants = [
//     {
//       id: 1,
//       name: "Spice Hub",
//       cuisine: "Indian",
//       rating: 4.5,
//       deliveryTime: "30 mins",
//       image: "https://media.istockphoto.com/id/1131393938/photo/very-stylish-indian-gourmet-restaurant.jpg?s=1024x1024&w=is&k=20&c=CvWiTQ4b53qyCuqxL-_jJi2v5fBgE-i_t-3p9qtUpBw=",
//       description: "Authentic Indian flavors delivered hot and fresh to your doorstep."
//     },
//     {
//       id: 2,
//       name: "Pasta Palace",
//       cuisine: "Italian",
//       rating: 4.2,
//       deliveryTime: "25 mins",
//       image: "https://media.istockphoto.com/id/1138328563/photo/photo-of-luxurious-restaurant-indoor.jpg?s=1024x1024&w=is&k=20&c=uIimo4ns_BtgO2mUtz01drtonQdF1CfZAJ0IeAWk0c4=",
//       description: "Savor the taste of Italy with handmade pasta and sauces."
//     },
//     {
//       id: 3,
//       name: "Sushi World",
//       cuisine: "Japanese",
//       rating: 4.8,
//       deliveryTime: "40 mins",
//       image: "https://media.istockphoto.com/id/500363479/photo/tables-set-for-meal.jpg?s=1024x1024&w=is&k=20&c=ks2wsyLzTFPEu--VWVuqwyRREkuxWcLYckv2lsPsPyc=",
//       description: "Fresh and authentic sushi prepared by expert chefs."
//     },
//     {
//       id: 4,
//       name: "Burger Barn",
//       cuisine: "American",
//       rating: 4.1,
//       deliveryTime: "20 mins",
//       image: "https://source.unsplash.com/400x300/?burger",
//       description: "Juicy gourmet burgers with all your favorite toppings."
//     },
//     {
//       id: 5,
//       name: "Dragon Delight",
//       cuisine: "Chinese",
//       rating: 4.3,
//       deliveryTime: "35 mins",
//       image: "https://source.unsplash.com/400x300/?chinese-food",
//       description: "Delicious Chinese cuisine with traditional spices and flavors."
//     },
//     {
//       id: 6,
//       name: "Taco Town",
//       cuisine: "Mexican",
//       rating: 4.0,
//       deliveryTime: "22 mins",
//       image: "https://source.unsplash.com/400x300/?tacos",
//       description: "Spicy and satisfying Mexican street food favorites."
//     },
//     {
//       id: 7,
//       name: "The Curry Leaf",
//       cuisine: "Indian",
//       rating: 4.6,
//       deliveryTime: "28 mins",
//       image: "https://source.unsplash.com/400x300/?curry",
//       description: "Rich and aromatic curries made with traditional recipes."
//     },
//     {
//       id: 8,
//       name: "Pizza Point",
//       cuisine: "Italian",
//       rating: 4.4,
//       deliveryTime: "18 mins",
//       image: "https://source.unsplash.com/400x300/?pizza",
//       description: "Crispy crusts and cheesy goodness straight from the oven."
//     },
//     {
//       id: 9,
//       name: "Ramen Realm",
//       cuisine: "Japanese",
//       rating: 4.7,
//       deliveryTime: "32 mins",
//       image: "https://source.unsplash.com/400x300/?ramen",
//       description: "Comforting bowls of ramen with rich broths and fresh toppings."
//     },
//     {
//       id: 10,
//       name: "BBQ Brothers",
//       cuisine: "American",
//       rating: 4.3,
//       deliveryTime: "26 mins",
//       image: "https://source.unsplash.com/400x300/?bbq",
//       description: "Smoked and grilled meats served with tangy sauces."
//     },
//     {
//       id: 11,
//       name: "Wok This Way",
//       cuisine: "Chinese",
//       rating: 4.1,
//       deliveryTime: "24 mins",
//       image: "https://source.unsplash.com/400x300/?wok",
//       description: "Fast, flavorful stir-fries cooked in a sizzling wok."
//     },
//     {
//       id: 12,
//       name: "Casa Mexicana",
//       cuisine: "Mexican",
//       rating: 4.5,
//       deliveryTime: "27 mins",
//       image: "https://source.unsplash.com/400x300/?mexican-food",
//       description: "Traditional Mexican cuisine with bold, spicy flavors."
//     },
//     {
//       id: 13,
//       name: "Kebab Kingdom",
//       cuisine: "Indian",
//       rating: 4.2,
//       deliveryTime: "33 mins",
//       image: "https://source.unsplash.com/400x300/?kebab",
//       description: "Succulent kebabs grilled to perfection with exotic spices."
//     }  
// ];

// const foodFilters = ['All', 'Starters', 'Main Course', 'Desserts', 'Beverages'];

// const foodItems = [
//   { name: 'Butter Chicken', category: 'Main Course', image: 'https://source.unsplash.com/300x200/?butter-chicken', price: 250 },
//   { name: 'Paneer Tikka', category: 'Starters', image: 'https://source.unsplash.com/300x200/?paneer', price: 180 },
//   { name: 'Gulab Jamun', category: 'Desserts', image: 'https://source.unsplash.com/300x200/?gulab-jamun', price: 80 },
//   { name: 'Masala Chai', category: 'Beverages', image: 'https://source.unsplash.com/300x200/?chai', price: 40 },
//   { name: 'Tandoori Roti', category: 'Main Course', image: 'https://source.unsplash.com/300x200/?roti', price: 20 },
// ];

// const RestaurantDetailPage = () => {
//   const params = useParams();
//   const restaurantId = parseInt(params.id as string);
//   const restaurant = dummyRestaurants.find((r) => r.id === restaurantId);

//   const [selectedFilter, setSelectedFilter] = useState('All');

//   const filteredItems =
//     selectedFilter === 'All'
//       ? foodItems
//       : foodItems.filter((item) => item.category === selectedFilter);

//   if (!restaurant) {
//     return <div className="text-center mt-20 text-xl">Restaurant not found</div>;
//   }

//   return (
//     <div className="min-h-screen flex flex-col">
//       <RestaurantHeader />


//       {/* --- ATTRACTIVE BANNER SECTION --- */}
// <div className="relative w-full h-[400px]">
//   <img
//     src={restaurant.image}
//     alt={restaurant.name}
//     className="w-full h-full object-cover"
//   />
  
//   {/* Overlay for dark effect */}
//   <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/50 to-transparent" />

//   {/* Content over banner */}
//   <div className="absolute inset-0 flex flex-col justify-end md:justify-center px-6 md:px-16 py-10 text-white">
//     <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 text-transparent bg-clip-text drop-shadow-xl">
//       {restaurant.name}
//     </h1>
    
//     <p className="mt-3 max-w-2xl text-sm md:text-base text-gray-100">{restaurant.description}</p>

//     <div className="mt-4 flex flex-wrap gap-3">
//       <span className="bg-white/10 px-4 py-1 rounded-full text-sm backdrop-blur-md">
//         ⭐ {restaurant.rating}
//       </span>
//       <span className="bg-white/10 px-4 py-1 rounded-full text-sm backdrop-blur-md">
//         ⏱ {restaurant.deliveryTime}
//       </span>
//       <span className="bg-white/10 px-4 py-1 rounded-full text-sm backdrop-blur-md">
//         🍽 {restaurant.cuisine}
//       </span>
//     </div>
//   </div>
// </div>


//       <main className="flex-grow bg-orange-50 px-4 py-8">
//         {/* --- FILTER BUTTONS --- */}
//         <div className="max-w-5xl mx-auto mb-6">
//           <div className="flex flex-wrap gap-2 justify-center">
//             {foodFilters.map((filter) => (
//               <button
//                 key={filter}
//                 onClick={() => setSelectedFilter(filter)}
//                 className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
//                   selectedFilter === filter
//                     ? 'bg-orange-500 text-white border-orange-600'
//                     : 'bg-white text-orange-600 border-orange-300 hover:bg-orange-100'
//                 }`}
//               >
//                 {filter}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* --- FILTERED FOOD CARDS --- */}
//         <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredItems.length === 0 ? (
//             <p className="text-center col-span-full text-gray-500">No items found in this category.</p>
//           ) : (
//             filteredItems.map((item, index) => (
//               <div key={index} className="bg-white shadow rounded-xl overflow-hidden">
//                 <img src={item.image} alt={item.name} className="w-full h-40 object-cover" />
//                 <div className="p-4">
//                   <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
//                   <p className="text-sm text-gray-500 mt-1">{item.category}</p>
//                   <div className="mt-2 text-orange-600 font-bold">₹ {item.price}</div>
//                   <button className="mt-3 w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition">
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       </main>

//       <RestaurantFooter />
//     </div>
//   );
// };

// export default RestaurantDetailPage;





'use client';

import { useParams } from 'next/navigation';
import RestaurantHeader from '../../_components/resturantHeader';
import RestaurantFooter from '../../_components/resturantFooter';
import CartPage from '@/app/cart/page';

const dummyRestaurants = [
    {
      id: 1,
      name: "Spice Hub",
      cuisine: "Indian",
      rating: 4.5,
      deliveryTime: "30 mins",
      image: "https://media.istockphoto.com/id/1131393938/photo/very-stylish-indian-gourmet-restaurant.jpg?s=1024x1024&w=is&k=20&c=CvWiTQ4b53qyCuqxL-_jJi2v5fBgE-i_t-3p9qtUpBw=",
      description: "Authentic Indian flavors delivered hot and fresh to your doorstep."
    },
    {
      id: 2,
      name: "Pasta Palace",
      cuisine: "Italian",
      rating: 4.2,
      deliveryTime: "25 mins",
      image: "https://media.istockphoto.com/id/1138328563/photo/photo-of-luxurious-restaurant-indoor.jpg?s=1024x1024&w=is&k=20&c=uIimo4ns_BtgO2mUtz01drtonQdF1CfZAJ0IeAWk0c4=",
      description: "Savor the taste of Italy with handmade pasta and sauces."
    },
    {
      id: 3,
      name: "Sushi World",
      cuisine: "Japanese",
      rating: 4.8,
      deliveryTime: "40 mins",
      image: "https://media.istockphoto.com/id/500363479/photo/tables-set-for-meal.jpg?s=1024x1024&w=is&k=20&c=ks2wsyLzTFPEu--VWVuqwyRREkuxWcLYckv2lsPsPyc=",
      description: "Fresh and authentic sushi prepared by expert chefs."
    },
    {
      id: 4,
      name: "Burger Barn",
      cuisine: "American",
      rating: 4.1,
      deliveryTime: "20 mins",
      image: "https://source.unsplash.com/400x300/?burger",
      description: "Juicy gourmet burgers with all your favorite toppings."
    },
    {
      id: 5,
      name: "Dragon Delight",
      cuisine: "Chinese",
      rating: 4.3,
      deliveryTime: "35 mins",
      image: "https://source.unsplash.com/400x300/?chinese-food",
      description: "Delicious Chinese cuisine with traditional spices and flavors."
    },
    {
      id: 6,
      name: "Taco Town",
      cuisine: "Mexican",
      rating: 4.0,
      deliveryTime: "22 mins",
      image: "https://source.unsplash.com/400x300/?tacos",
      description: "Spicy and satisfying Mexican street food favorites."
    },
    {
      id: 7,
      name: "The Curry Leaf",
      cuisine: "Indian",
      rating: 4.6,
      deliveryTime: "28 mins",
      image: "https://source.unsplash.com/400x300/?curry",
      description: "Rich and aromatic curries made with traditional recipes."
    },
    {
      id: 8,
      name: "Pizza Point",
      cuisine: "Italian",
      rating: 4.4,
      deliveryTime: "18 mins",
      image: "https://source.unsplash.com/400x300/?pizza",
      description: "Crispy crusts and cheesy goodness straight from the oven."
    },
    {
      id: 9,
      name: "Ramen Realm",
      cuisine: "Japanese",
      rating: 4.7,
      deliveryTime: "32 mins",
      image: "https://source.unsplash.com/400x300/?ramen",
      description: "Comforting bowls of ramen with rich broths and fresh toppings."
    },
    {
      id: 10,
      name: "BBQ Brothers",
      cuisine: "American",
      rating: 4.3,
      deliveryTime: "26 mins",
      image: "https://source.unsplash.com/400x300/?bbq",
      description: "Smoked and grilled meats served with tangy sauces."
    },
    {
      id: 11,
      name: "Wok This Way",
      cuisine: "Chinese",
      rating: 4.1,
      deliveryTime: "24 mins",
      image: "https://source.unsplash.com/400x300/?wok",
      description: "Fast, flavorful stir-fries cooked in a sizzling wok."
    },
    {
      id: 12,
      name: "Casa Mexicana",
      cuisine: "Mexican",
      rating: 4.5,
      deliveryTime: "27 mins",
      image: "https://source.unsplash.com/400x300/?mexican-food",
      description: "Traditional Mexican cuisine with bold, spicy flavors."
    },
    {
      id: 13,
      name: "Kebab Kingdom",
      cuisine: "Indian",
      rating: 4.2,
      deliveryTime: "33 mins",
      image: "https://source.unsplash.com/400x300/?kebab",
      description: "Succulent kebabs grilled to perfection with exotic spices."
    }  
];
const RestaurantDetailPage = () => {
  const params = useParams();
  const restaurantId = parseInt(params.id as string);
  const restaurant = dummyRestaurants.find((r) => r.id === restaurantId);

  if (!restaurant) {
    return <div className="text-center mt-20 text-xl">Restaurant not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <RestaurantHeader />

      {/* --- ATTRACTIVE BANNER SECTION --- */}
      <div className="relative w-full h-[400px]">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end md:justify-center px-6 md:px-16 py-10 text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 text-transparent bg-clip-text drop-shadow-xl">
            {restaurant.name}
          </h1>
          <p className="mt-3 max-w-2xl text-sm md:text-base text-gray-100">{restaurant.description}</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <span className="bg-white/10 px-4 py-1 rounded-full text-sm backdrop-blur-md">⭐ {restaurant.rating}</span>
            <span className="bg-white/10 px-4 py-1 rounded-full text-sm backdrop-blur-md">⏱ {restaurant.deliveryTime}</span>
            <span className="bg-white/10 px-4 py-1 rounded-full text-sm backdrop-blur-md">🍽 {restaurant.cuisine}</span>
          </div>
        </div>
      </div>

      {/* Link to cart */}
      <main className="flex-grow bg-orange-50 px-4 py-5 text-center">
        {/* <p className="text-lg text-gray-700">Browse the restaurant’s full menu</p>
        <a
          href="/cart"
          className="mt-6 inline-block px-6 py-3 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 transition"
        >
          View Food Menu
        </a> */}
        <CartPage/>
      </main>

      <RestaurantFooter />
    </div>
  );
};

export default RestaurantDetailPage;
