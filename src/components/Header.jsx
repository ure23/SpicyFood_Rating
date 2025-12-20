const Header = ({ search, onSearchChange }) => {
  return (
    <header className="sticky top-0 z-50 px-4 md:px-6 lg:px-8 py-4 bg-gradient-to-r from-red-600 via-red-500 to-orange-500 shadow-lg backdrop-blur-sm bg-opacity-95">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Logo + Title */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="p-2 bg-white/20 rounded-full backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300">
              <img 
                src="src/assets/spicy.png" 
                alt="Spicy Logo" 
                className="w-10 h-10 drop-shadow-lg"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white tracking-tight">
                Rate Spicy Food
              </h1>
              <p className="text-sm text-white/80 font-medium">Find & rate your favorite spicy dishes</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search spicy foods..."
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl 
                text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/30 
                transition-all duration-300"
            />
          </div>
          
        </div>
      </div>
    </header>
  );
};

export default Header;
