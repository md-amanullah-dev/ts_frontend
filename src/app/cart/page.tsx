

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FiShoppingCart,} from 'react-icons/fi';

const foodFilters = ['All', 'Starters', 'Main Course', 'Desserts', 'Beverages'];

const foodItems = [
  { 
    name: 'Butter Chicken', 
    category: 'Main Course', 
    image: 'https://images.unsplash.com/photo-1714799263303-29e7d638578a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8QnV0dGVyJTIwQ2hpY2tlbnxlbnwwfHwwfHx8MA%3D%3D', 
    price: 250,
    rating: 4.5,
    prepTime: '25 mins',
    description: 'Tender chicken cooked in a creamy tomato-based gravy with aromatic spices'
  },
  { 
    name: 'Paneer Tikka', 
    category: 'Starters', 
    image: 'https://images.unsplash.com/photo-1666001120694-3ebe8fd207be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGFuZWVyJTIwVGlra2F8ZW58MHx8MHx8fDA%3D', 
    price: 180,
    rating: 4.2,
    prepTime: '20 mins',
    description: 'Marinated cottage cheese grilled to perfection with bell peppers and onions'
  },
  { 
    name: 'Gulab Jamun', 
    category: 'Desserts', 
    image: 'https://media.istockphoto.com/id/163064596/photo/gulab-jamun.webp?a=1&b=1&s=612x612&w=0&k=20&c=F_5_AgCdrsecO13W-wiuCZAwYZPBpN3UETTyYtQQlLM=', 
    price: 80,
    rating: 4.8,
    prepTime: '15 mins',
    description: 'Soft, melt-in-mouth milk balls soaked in rose-flavored sugar syrup'
  },
  { 
    name: 'Masala Chai', 
    category: 'Beverages', 
    image: 'https://media.istockphoto.com/id/1336601313/photo/top-view-of-indian-herbal-masala-chai-or-traditional-beverage-tea-with-milk-and-spices-kerala.webp?a=1&b=1&s=612x612&w=0&k=20&c=MbKwu6EcL6HdYiE-yVYC6th6VW1p48fXxnun13yQw6E=', 
    price: 40,
    rating: 4.3,
    prepTime: '10 mins',
    description: 'Aromatic Indian tea with milk, spices and herbs'
  },
  { 
    name: 'Tandoori Roti', 
    category: 'Main Course', 
    image: 'https://media.istockphoto.com/id/1325272109/photo/green-peas-or-matar-paneer-curry.webp?a=1&b=1&s=612x612&w=0&k=20&c=DmYtl0OoHO9g6Z-wm3oMRjcGiSKunC1BHfKiwH93rtQ=', 
    price: 20,
    rating: 4.0,
    prepTime: '5 mins',
    description: 'Traditional Indian bread baked in clay oven'
  },
  { 
    name: 'Dal Makhani', 
    category: 'Main Course', 
    image: 'https://media.istockphoto.com/id/1170374719/photo/dal-makhani-at-dark-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=FWHhW6SnrLvmwaR-APN3pIxEjLJe073-PQ0cfvOGoTI=', 
    price: 150,
    rating: 4.6,
    prepTime: '30 mins',
    description: 'Creamy black lentils slow-cooked with butter and spices'
  },
];

const CartPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState({});
  const router = useRouter();

  const filteredItems = selectedFilter === 'All' ? foodItems : foodItems.filter((item) => item.category === selectedFilter);

  const addToCart = (item) => {
    if (!cart.find((i) => i.name === item.name)) {
      setCart([...cart, item]);
    }
    setQuantities({ ...quantities, [item.name]: (quantities[item.name] || 0) + 1 });
  };

  const increaseQuantity = (itemName) => {
    setQuantities({ ...quantities, [itemName]: (quantities[itemName] || 0) + 1 });
  };

  const decreaseQuantity = (itemName) => {
    if (quantities[itemName] > 1) {
      setQuantities({ ...quantities, [itemName]: quantities[itemName] - 1 });
    } else {
      const newQuantities = { ...quantities };
      delete newQuantities[itemName];
      setQuantities(newQuantities);
      setCart(cart.filter((item) => item.name !== itemName));
    }
  };

  const handleCheckout = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('quantities', JSON.stringify(quantities));
    router.push('/checkout');
  };

  const cartTotal = cart.reduce((total, item) => total + item.price * (quantities[item.name] || 0), 0);

  return (
    <div className="min-h-screen p-4 bg-orange-50">
      <div className="flex flex-wrap gap-3 mb-6">
        {foodFilters.map((filter) => (
          <button
            key={filter}
            onClick={() => setSelectedFilter(filter)}
            className={`px-4 py-2 rounded-full border ${selectedFilter === filter ? 'bg-orange-500 text-white' : 'bg-white text-orange-500'}`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div key={item.name} className="bg-white rounded-xl shadow-lg">
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-t-xl" />
            <div className="p-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold">{item.name}</h3>
                <span className="text-orange-600 font-semibold">₹{item.price}</span>
              </div>
              <p className="text-sm text-gray-600">{item.description}</p>
              <button onClick={() => addToCart(item)} className="mt-3 w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600">
                <FiShoppingCart className="inline mr-2" /> Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div className="fixed bottom-4 right-4 bg-white shadow-xl rounded-xl p-4 w-80">
          <h3 className="text-lg font-bold mb-2">Your Cart</h3>
          {cart.map((item) => (
            <div key={item.name} className="flex justify-between items-center border-b py-2">
              <div>
                <p>{item.name}</p>
                <p className="text-sm text-gray-500">₹{item.price} x {quantities[item.name]}</p>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => decreaseQuantity(item.name)} className="bg-gray-200 px-2 rounded">-</button>
                <span>{quantities[item.name]}</span>
                <button onClick={() => increaseQuantity(item.name)} className="bg-gray-200 px-2 rounded">+</button>
              </div>
            </div>
          ))}
          <div className="mt-4 flex justify-between font-bold">
            <span>Total:</span>
            <span>₹{cartTotal}</span>
          </div>
          <button onClick={handleCheckout} className="mt-4 w-full bg-green-600 text-white py-2 rounded">Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;


