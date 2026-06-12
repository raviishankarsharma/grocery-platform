import React, { useState } from "react";
import Button from "../Button/Button";
import Heading from "../../Heading/Heading";
import ProductList from "../Products/ProductLists";
import Cards from "../Cards/Cards";
import {Link} from "react-router-dom"

const Products = () => {
  const Categories = ["All", "Fruits", "Vegetables", "Dairy", "SeaFood", "Meat"];

  const [activeTab, setActiveTab] = useState("All");

  let filteredItems = activeTab === 'All' ? ProductList : ProductList.filter(item => item.category === activeTab);


  const renderCards = filteredItems.slice(0, 8).map((product, idx1) => {
    return <Cards key={idx1} image={product.image} name={product.name} price={product.price}/>;
  });

  return (
    <section>
      <div className="max-w-350 mx-auto px-10 py-20">
        <Heading highlight="Our" heading="Products " />

        {/* Tabs */}
        <div className="gap-5 flex flex-wrap justify-center mt-10">
          {Categories.map((elem, idx) => {
            return (
              <button
                key={idx}
                className={`px-5 py-2 text-lg rounded-lg cursor-pointer ${activeTab === elem ? 'bg-linear-to-b from-orange-400 to-orange-500 text-white' : 'bg-zinc-100'}`} onClick={()=> setActiveTab(elem)}>
                {elem}
              </button>
            );
          })}
        </div>

        {/* Product-Listing */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-20">
          {renderCards}
        </div>

        <div className="mt-15 mx-auto w-fit">
         <Link to='allproducts' className='py-3 px-8 bg-linear-to-b from-orange-400 to-orange-500 text-white rounded text-lg font-medium hover:scale-95 hover:to-orange-600 transition-all duration-200 cursor-pointer'>View All</Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
