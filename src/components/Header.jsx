const Header = ({name}) => {
  return (
    <>
     <header className="pb-4 px-20 bg-orange-500 shadow rounded-b-lg" > 
        <article className="flex justify-between item-center">
            <div className="flex items-center space-x-3">
                <img src="src/assets/chili.png" alt="Spicy Logo" className="w-16"/>
                <h1 className="-m-3 text-3xl font-bold font-serif">
                    Rate Spicy Food
                </h1>
            </div>
        </article>
     </header>

    </>
    

  );
}

export default Header;