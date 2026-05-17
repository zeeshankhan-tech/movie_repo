export const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-gray-400 mt-10 border-t border-zinc-800">
      
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <h1 className="text-2xl font-bold text-red-500 mb-3">
            MovieHub
          </h1>
          <p className="text-sm">
            Explore trending movies, top rated films, and save your favorites anytime.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-red-500 cursor-pointer">Trending</li>
            <li className="hover:text-red-500 cursor-pointer">Top Rated</li>
            <li className="hover:text-red-500 cursor-pointer">Favorites</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-red-500 cursor-pointer">Help Center</li>
            <li className="hover:text-red-500 cursor-pointer">Contact</li>
            <li className="hover:text-red-500 cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white font-semibold mb-3">Follow Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-red-500 cursor-pointer">Instagram</li>
            <li className="hover:text-red-500 cursor-pointer">Twitter</li>
            <li className="hover:text-red-500 cursor-pointer">YouTube</li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="text-center py-4 border-t border-zinc-800 text-xs">
        © {new Date().getFullYear()} MovieHub. All rights reserved.
      </div>

    </footer>
  );
};