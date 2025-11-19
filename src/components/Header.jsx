const Header = ({name}) => {
  return (
    <>
     <header className="pb-4 px-20 rounded-b-lg bg-gradient-to-r from-red-600 to-orange-500 shadow" > 
        <article className="flex justify-between item-center">
            <div className="flex items-center space-x-3 justify-between">
                <img src="src/assets/spicy.png" alt="Spicy Logo" className="w-16"/>
                <h1 className="-m-3 text-3xl font-bold font-monteserrat text-neutral-100">
                    Rate Spicy Food
                </h1>
            </div>

            <div className="px-3 py-1 my-3 flex items-center rounded-lg bg-white/20 backdrop-blur">
              <img src="src/assets/barbar.png" alt="Search" className="w-8 px-1" />
                  <input type="text" placeholder="Search" className="w-full bg-transparent placeholder-neutral-200 text-neutral-100 focus:outline-none"/>
                </div>
        </article>

     </header>

    </>
    

  );
}

export default Header;