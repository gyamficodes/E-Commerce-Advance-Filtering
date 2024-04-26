import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import products from "./db/data";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";
import "./index.css";
// import { useEffect } from "react";
function App() {

// Function to handle showing the mobile menu
function handleShowMenu() {
  const mobileMenu = document.querySelector('#sideBar');
  // Remove the '-translate-x-[100%]' class and add 'translate-x-[0%]' class to 'mobileMenu'
  mobileMenu.classList.remove('-translate-x-[100%]');
  mobileMenu.classList.add('translate-x-[0%]');
}

// Function to hide the mobile menu
function hideMenu() {
  const mobileMenu = document.querySelector('#sideBar');
  // Add the '-translate-x-[100%]' class and remove 'translate-x-[0%]' class from 'mobileMenu'
  mobileMenu.classList.add('-translate-x-[100%]');
  mobileMenu.classList.remove('translate-x-[0%]');
}


  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);


  

  return (
    <>
    <section className=" flex h-screen bg-white overflow-hidden">
      {/* sidebar */}
       <div id="sideBar" className="-translate-x-[100%] transition-all duration-700  ease-in-out xl:translate-x-[0%] xl:transition-all  xl:duration-0  w-[50%] sm:w-[30%] lg:w-[15%] flex bg-white flex-col h-full border-r xl:relative fixed z-[999] top-0 left-0 bottom-0">
        <div className="h-[10%] w-full border-b relative">
        <div className=" flex items-center justify-center h-full text-[30px] ">
          <h1>🛒</h1>
        </div>
        <IoMdClose onClick={hideMenu}  className=" xl:hidden absolute top-0 right-0 w-7 h-7 border cursor-pointer hover:border-red-600"/>
        </div>
        <div className=" h-[90%] w-full flex items-center justify-center  overflow-hidden overflow-y-auto">
        <Sidebar handleChange={handleChange} />
        </div>
 
       </div>
       {/* sidebar */}

       {/* main */}
       <div className="w-full h-full">
       <div className=" h-[10%] w-full ">
       <Navigation query={query} handleInputChange={handleInputChange} handleShowMenu={handleShowMenu} />
       </div>
        <div className=" h-[90%] w-full overflow-hidden overflow-y-scroll">
      <Recommended handleClick={handleClick} />
      <Products result={result} />
        </div>
       </div>
       {/* main */}
    </section>
    

    
    </>
  );
}

export default App;
