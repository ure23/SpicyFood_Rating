import { useState } from "react";

const FoodForm = () => {

  const [Name, setName] = useState("");
   const [Namelist, setNamelist] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setNamelist([...Namelist, Name]);

    console.log(Namelist);
  }


  return (
    <form onSubmit={handleSubmit}>
    <div className="bg-gray-100 p-5 rounded-xl shadow-md w-80">
      <h2 className="text-xl font-bold mb-4 text-center">Add Spicy Food</h2>
    <label className="block mb-2 font-medium">Food Name:</label>
        <input type="text" 
        placeholder="Enter food name" 
        className="w-full p-2 mb-3 border rounded"
        onChange={(e) => setName(e.target.value)}
      />


      <h1>{Namelist}</h1>
      <button type="submit" className="w-full bg-gradient-to-r from-red-600 to-orange-500 shadow text-white p-2 rounded hover:bg-red-600">
        Add Food
      </button>
    </div>

    </form>

    
  );
};

export default FoodForm;
