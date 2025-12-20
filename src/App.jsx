import { useState } from "react";
import Header from "./components/Header";
import AddFoodForm from "./components/Addfoodform.jsx";
import FoodList from "./components/Foodlist.jsx";

function App() {
  const [foods, setFoods] = useState([]);
  const [search, setSearch] = useState("");

  const handleAddFood = (newFood) => {
    setFoods((prev) => [...prev, newFood]);
  };

  const handleDelete = (id) => {
    setFoods((prev) => prev.filter((f) => f.id !== id));
  };

  const filteredFoods = foods.filter((food) =>
    food.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-red-50">
      <Header search={search} onSearchChange={setSearch} />
  
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            <AddFoodForm onAddFood={handleAddFood} />
            <div className="flex-1">
              <FoodList foods={filteredFoods} onDelete={handleDelete} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
