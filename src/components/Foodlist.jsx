import { useState } from "react";
import FoodItem from "./Fooditem.jsx";

const FoodList = ({ foods, onDelete }) => {
  const [sortType, setSortType] = useState("newest");

  // Simple sorting
  let sortedFoods = [...foods];
  
  if (sortType === "spicy") {
    sortedFoods.sort((a, b) => b.rating - a.rating); // Highest rating first
  } else if (sortType === "mild") {
    sortedFoods.sort((a, b) => a.rating - b.rating); // Lowest rating first
  } else if (sortType === "name") {
    sortedFoods.sort((a, b) => a.name.localeCompare(b.name)); // Alphabetical
  }
  // If "newest", keep original order

  return (
    <div className="w-full bg-white rounded-xl shadow p-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-red-600">Food List</h2>
          <p className="text-gray-600">Total: {foods.length} foods</p>
        </div>
        
        {/*Sort Buttons */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSortType("newest")}
            className={`px-4 py-2 rounded ${sortType === "newest" ? "bg-red-500 text-white" : "bg-gray-100"}`}
          >
            Newest
          </button>
          <button
            onClick={() => setSortType("spicy")}
            className={`px-4 py-2 rounded ${sortType === "spicy" ? "bg-red-500 text-white" : "bg-gray-100"}`}
          >
            Spiciest
          </button>
          <button
            onClick={() => setSortType("mild")}
            className={`px-4 py-2 rounded ${sortType === "mild" ? "bg-red-500 text-white" : "bg-gray-100"}`}
          >
            Mildest
          </button>
        </div>
      </div>

      {/* Empty Message */}
      {sortedFoods.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500">No foods added yet. Add your first spicy food!</p>
        </div>
      )}

      {/* Food Grid*/}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sortedFoods.map((food) => (
          <FoodItem key={food.id} food={food} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
};

export default FoodList;