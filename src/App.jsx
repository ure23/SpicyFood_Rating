import Header from '../src/components/Header.jsx';
import AddFoodForm from "../src/components/Addfoodform.jsx";
import {useState} from 'react';

function App() {


  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header name="Berto" />

          <main className="flex flex-col md:flex-row gap-5 p-5 flex-1">
            <AddFoodForm />    


          </main>
      
      
      </div>
    </>
  )
}

export default App;
