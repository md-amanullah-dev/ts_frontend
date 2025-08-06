
'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { FiTrash2, FiArrowLeft } from 'react-icons/fi';

const CheckoutPage = () => {
  const router = useRouter();
  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const storedQuantities = JSON.parse(localStorage.getItem('quantities') || '{}');
    setCart(storedCart);
    setQuantities(storedQuantities);
  }, []);

  const handleRemoveItem = (itemName: string) => {
    const updatedCart = cart.filter((item: any) => item.name !== itemName);
    const updatedQuantities = { ...quantities };
    delete updatedQuantities[itemName];

    setCart(updatedCart);
    setQuantities(updatedQuantities);

    localStorage.setItem('cart', JSON.stringify(updatedCart));
    localStorage.setItem('quantities', JSON.stringify(updatedQuantities));
  };

  const cartTotal = cart.reduce(
    (total: number, item: any) => total + item.price * quantities[item.name],
    0
  );

  return (
    <div className="p-6 max-w-4xl mx-auto min-h-screen bg-orange-50">
      <div className="mb-6 flex items-center justify-between">
        <button
          onClick={() => router.push('/cart')}
          className="flex items-center text-orange-600 hover:text-orange-800"
        >
          <FiArrowLeft className="mr-2" /> Back to Menu
        </button>
        <h1 className="text-2xl font-bold text-gray-800">Checkout</h1>
        <span />
      </div>

      {cart.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cart.map((item: any) => (
            <div
              key={item.name}
              className="bg-white rounded-xl shadow-sm p-4 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-md border"
                />
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-sm text-gray-500">{item.description}</p>
                  <p className="text-sm text-gray-700">
                    Quantity: <strong>{quantities[item.name]}</strong>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-lg font-semibold text-orange-600">
                  ₹{item.price * quantities[item.name]}
                </p>
                <button
                  onClick={() => handleRemoveItem(item.name)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FiTrash2 size={20} />
                </button>
              </div>
            </div>
          ))}

          {/* Total */}
          <div className="text-right pt-6 border-t mt-4">
            <p className="text-xl font-bold text-gray-800">
              Total: ₹{cartTotal}
            </p>
            <button
              onClick={() => alert('Proceeding to payment...')}
              className="mt-4 px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
            >
              Confirm & Pay
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;

