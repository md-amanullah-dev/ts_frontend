// 'use client';

// import Link from 'next/link';
// import { useState } from 'react';
// import { Menu, X } from 'lucide-react';

// const ResturantHeader = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   return (
//     <header className="w-full bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
//         {/* Left - Logo */}
//         <Link href="/" className="flex items-center gap-2 text-orange-600 font-bold text-xl">
//           🍴 Foodify
//         </Link>

//         {/* Right - Navigation Links (Desktop) */}
//         <nav className="hidden md:flex gap-8 items-center text-sm font-medium text-gray-700">
//           <Link href="/" className="hover:text-orange-600 transition">Home</Link>
//           <Link href="/about" className="hover:text-orange-600 transition">About</Link>
//           <Link href="/profile" className="hover:text-orange-600 transition">Profile</Link>
//           <Link href="/resturant" className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1.5 rounded-full transition">
//             Login / SignUp
//           </Link>
//         </nav>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-orange-600"
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//         >
//           {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-2">
//           <Link href="/" className="block text-gray-700 hover:text-orange-600">Home</Link>
//           <Link href="/about" className="block text-gray-700 hover:text-orange-600">About</Link>
//           <Link href="/profile" className="block text-gray-700 hover:text-orange-600">Profile</Link>
//           <Link
//             href="/resturant"
//             className="block bg-orange-500 hover:bg-orange-600 text-white text-center py-2 rounded-md"
//           >
//             Login / SignUp
//           </Link>
//         </div>
//       )}
//     </header>
//   );
// };

// export default ResturantHeader;


'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const ResturantHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('CMS_TOKEN');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('CMS_TOKEN');
    setIsLoggedIn(false);
    router.push('/resturant'); // Redirect to login/signup
  };

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left - Logo */}
        <Link href="/" className="flex items-center gap-2 text-orange-600 font-bold text-xl">
          🍴 Foodify
        </Link>

        {/* Right - Desktop Menu */}
        <nav className="hidden md:flex gap-6 items-center text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-orange-600 transition">Home</Link>
          <Link href="/about" className="hover:text-orange-600 transition">About</Link>
          <Link href="/profile" className="hover:text-orange-600 transition">Profile</Link>

          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded-full transition"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/resturant"
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1.5 rounded-full transition"
            >
              Login / SignUp
            </Link>
          )}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-orange-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-2">
          <Link href="/" className="block text-gray-700 hover:text-orange-600">Home</Link>
          <Link href="/about" className="block text-gray-700 hover:text-orange-600">About</Link>
          <Link href="/profile" className="block text-gray-700 hover:text-orange-600">Profile</Link>

          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="w-full bg-red-500 hover:bg-red-600 text-white text-center py-2 rounded-md"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/resturant"
              className="block bg-orange-500 hover:bg-orange-600 text-white text-center py-2 rounded-md"
            >
              Login / SignUp
            </Link>
          )}
        </div>
      )}
    </header>
  );
};

export default ResturantHeader;

