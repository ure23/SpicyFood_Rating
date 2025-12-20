import { useState } from "react";

const AddFoodForm = ({ onAddFood }) => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [foodImage, setFoodImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      alert("Please enter food name!");
      return;
    }

    const newFood = {
      id: crypto.randomUUID(),
      name,
      comment,
      rating,
      image: foodImage,
      date: new Date().toLocaleDateString(),
    };

    onAddFood(newFood);

    setName("");
    setComment("");
    setRating(0);
    setFoodImage(null);
  };

  const heatLabel =
    rating === 0
      ? "Not rated"
      : rating === 1
      ? "Mild"
      : rating === 2
      ? "Medium"
      : rating === 3
      ? "Hot"
      : rating === 4
      ? "Very Hot"
      : "Extreme";

  return (
    <div className="lg:w-96">
      <form
        onSubmit={handleSubmit}
        className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6 
          hover:shadow-2xl transition-shadow duration-300"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg">
            <span className="text-2xl">🌶️</span>
          </div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
            Add Spicy Food
          </h2>
        </div>

        {/* Food Name */}
        <div className="mb-5">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Food Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g., Nashville Hot Chicken"
            className={`w-full px-4 py-3 rounded-xl border transition-all duration-300
              ${!name 
                ? "border-red-300 focus:ring-2 focus:ring-red-200" 
                : "border-gray-300 focus:border-red-400 focus:ring-2 focus:ring-red-100"
              }`}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Image Upload*/}
        <div className="mb-5">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Food Image
          </label>
          <label
            className={`block rounded-xl border-2 border-dashed p-6 text-center cursor-pointer 
              transition-all duration-300 hover:scale-[1.02] ${
                foodImage 
                  ? "border-green-400 bg-green-50" 
                  : "border-red-200 hover:border-red-400 hover:bg-red-50"
              }`}
          >
            <div className="space-y-2">
              {foodImage ? (
                <>
                  <div className="text-green-600 text-3xl">✅</div>
                  <p className="text-green-700 font-medium">Image uploaded!</p>
                  <p className="text-xs text-gray-500">Click to change</p>
                </>
              ) : (
                <>
                  <div className="text-red-400 text-3xl">📸</div>
                  <p className="font-medium text-gray-700">Upload food image</p>
                  <p className="text-xs text-gray-500">PNG, JPG, WEBP up to 5MB</p>
                </>
              )}
            </div>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files[0];
                if (!file) return;
                const reader = new FileReader();
                reader.onload = () => setFoodImage(reader.result);
                reader.readAsDataURL(file);
              }}
            />
          </label>
        </div>

        {/* Preview Image */}
        {foodImage && (
          <div className="mb-5 animate-fadeIn">
            <p className="text-sm font-medium text-gray-700 mb-2">Preview:</p>
            <div className="relative rounded-xl overflow-hidden shadow-lg group">
              <img
                src={foodImage}
                alt="Preview"
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        )}

        {/* Comment */}
        <div className="mb-5">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Your Experience
          </label>
          <textarea
            placeholder="Describe the spice level, flavor, and your experience..."
            rows="3"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-red-400 
              focus:ring-2 focus:ring-red-100 transition-all duration-300 resize-none"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>

        {/* Spicy Rating */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Spicy Rating
          </label>
          <div className="flex flex-wrap gap-2 mb-3">
            {[1, 2, 3, 4, 5].map((num) => {
              const active = hoverRating >= num || rating >= num;
              return (
                <img
                  key={num}
                  src="src/assets/Rating.png"
                  alt="chili"
                  className={`w-8 cursor-pointer transition transform duration-200 ${
                    active
                      ? "scale-110 drop-shadow-md"
                      : "grayscale opacity-40"
                  }`}
                  onClick={() => setRating(num)}
                  onMouseEnter={() => setHoverRating(num)}
                  onMouseLeave={() => setHoverRating(0)}
                />
              );
            })}
          </div>
          
          {/* Heat Level Display*/}
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-4">
            <p className="text-center">
              <span className="text-gray-600">Selected: </span>
              <span className="text-xl font-bold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
                {heatLabel}
              </span>
            </p>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!name}
          className={`w-full py-3.5 rounded-xl font-bold text-lg transition-all duration-300 
            flex items-center justify-center gap-2 ${
              !name
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95"
            }`}
        >
          <span>Add to Collection</span>
          <span className="animate-pulse">🔥</span>
        </button>
      </form>
    </div>
  );
};

export default AddFoodForm;