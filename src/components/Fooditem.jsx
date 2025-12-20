import React, { useState } from 'react';

const FoodItem = ({ food, onDelete }) => {
  const [isHovered, setIsHovered] = useState(false);

  const heatColor = food.rating === 5 ? "from-red-700 to-red-900" :
                   food.rating === 4 ? "from-red-600 to-orange-600" :
                   food.rating === 3 ? "from-orange-500 to-yellow-500" :
                   food.rating === 2 ? "from-yellow-400 to-yellow-300" :
                   "from-green-400 to-green-300";

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card */}
      <div className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 
        hover:shadow-2xl hover:-translate-y-2 border border-gray-100 ${isHovered ? 'ring-2 ring-red-100' : ''}`}>
        
        {/* Image Section */}
        <div className="relative h-48 overflow-hidden">
          {food.image ? (
            <img
              src={food.image}
              alt={food.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center">
              <span className="text-6xl opacity-30">🌶️</span>
            </div>
          )}
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          
          {/* Rating Badge */}
          <div className="absolute top-4 left-4">
            <div className={`px-3 py-1.5 rounded-full backdrop-blur-sm bg-white/90 
              ${food.rating >= 4 ? 'text-red-700' : food.rating >= 3 ? 'text-orange-600' : 'text-yellow-600'}`}>
              <div className="flex items-center gap-1">
                <span className="font-bold text-lg">{food.rating}</span>
                <span className="text-sm">/5</span>
              </div>
            </div>
          </div>
          
          {/* Delete Button - Appears on hover */}
          <button
            onClick={() => onDelete(food.id)}
            className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full 
              opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 
              group-hover:translate-x-0 hover:bg-red-100 hover:text-red-600"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
        
        {/* Content Section */}
        <div className="p-5">
          {/* Food Name */}
          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">
            {food.name}
          </h3>
          
          {/* Comment */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-2 italic">
            "{food.comment || 'No description provided'}"
          </p>
          
          {/* Spice Meter */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">Spice Level:</span>
              <span className={`text-sm font-bold ${food.rating >= 4 ? 'text-red-600' : 'text-orange-500'}`}>
                {food.rating === 5 ? "EXTREME" : 
                 food.rating === 4 ? "VERY HOT" : 
                 food.rating === 3 ? "HOT" : 
                 food.rating === 2 ? "MEDIUM" : "MILD"}
              </span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className={`h-full rounded-full bg-gradient-to-r ${heatColor} transition-all duration-700`}
                style={{ width: `${food.rating * 20}%` }}
              ></div>
            </div>
          </div>
          
          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              <span className="text-xs text-gray-500">{food.date}</span>
            </div>
            
            {/* Chili Icons */}
            <div className="flex gap-1">
              {[...Array(food.rating)].map((_, i) => (
                <span key={i} className="text-red-500 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}>
                  🌶️
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
