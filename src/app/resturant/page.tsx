// 'use client';

// import { useState } from 'react';
// import RestaurantFooter from '../_components/resturantFooter';
// import ResturantHeader from '../_components/resturantHeader';
// import RestaurantLogin from '../_components/resturantLogin';
// import RestaurantSignUp from '../_components/resturantSignup';

// const Restaurant = () => {
//     const [isLogin, setIsLogin] = useState(true);

//     return (
//         <>
//             <ResturantHeader />
//             <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-yellow-100 to-orange-100 px-4">

//                 <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-2xl space-y-6">
//                     <h1 className="text-3xl font-bold text-center text-orange-600">
//                         {isLogin ? '🍽️ Restaurant Login' : '📝 Restaurant Signup'}
//                     </h1>

//                     {isLogin ? <RestaurantLogin /> : <RestaurantSignUp />}

//                     <div className="text-center mt-4">
//                         <p className="text-sm text-gray-600">
//                             {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
//                             <button
//                                 onClick={() => setIsLogin(!isLogin)}
//                                 className="text-orange-600 font-semibold hover:underline transition"
//                             >
//                                 {isLogin ? 'Sign Up' : 'Login'}
//                             </button>
//                         </p>
//                     </div>
//                 </div>
//             </div>
//             <RestaurantFooter/>
//         </>
//     );
// };

// export default Restaurant;

'use client';

import { useState } from 'react';
import RestaurantFooter from '../_components/resturantFooter';
import RestaurantHeader from '../_components/resturantHeader';
import RestaurantLogin from '../_components/resturantLogin';
import RestaurantSignUp from '../_components/resturantSignup';

const Restaurant = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <RestaurantHeader />

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center bg-gradient-to-r from-yellow-100 to-orange-100 px-4 py-4">
        <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-2xl space-y-6">
          <h1 className="text-3xl font-bold text-center text-orange-600">
            {isLogin ? '🍽️ Restaurant Login' : '📝 Restaurant Signup'}
          </h1>

          {isLogin ? <RestaurantLogin /> : <RestaurantSignUp />}

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

      {/* Footer */}
      <RestaurantFooter />
    </div>
  );
};

export default Restaurant;
