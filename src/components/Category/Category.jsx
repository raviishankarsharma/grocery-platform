import React from "react";
import Heading from "../../Heading/Heading";
import Button from "../Button/Button"
import FruitsCat from "../../assets/fruits-and-veggies.png";
import Dairycat from "../../assets/dairy-and-eggs.png";
import SeaFoodCat from "../../assets/meat-and-seafood.png";
import {Link} from 'react-router-dom'

const Category = () => {
  
  const renderCards = category.map((elem, idx) => {
    return (
        // Card
      <div key={idx} className="flex-1 basis-2xs ">

        {/* Card-image */}
        <div className="w-full min-h-[25vh] relative -bottom-10">
          <img src={elem.image} className="bottom-0 absolute" />
        </div>
         
         {/* Card-Content */}
        <div className="bg-zinc-100 pt-17 p-8 rounded-xl">
          <h3 className="font-bold md:text-3xl text-2xl text-zinc-800">{elem.title}</h3>
          <p className="text-zinc-600 mt-3 mb-9">{elem.description}</p>
          <Link to={elem.path} className='py-3 px-8 bg-linear-to-b from-orange-400 to-orange-500 text-white rounded text-lg font-medium hover:scale-95 hover:to-orange-600 transition-all duration-200 cursor-pointer'>See All</Link>
        </div>
      </div>
    );
  });

  return (
    <section className="max-w-350 mx-auto px-10 py-20">
      <div >
        <Heading highlight="Shop" heading="by Category" />
        
        {/* Category-Card */}
        <div className="flex flex-wrap gap-10 mt-0 md:mt-15">{renderCards}</div>
      </div>
    </section>
  );
};

export default Category;

const category = [
  {
    id: 1,
    title: "Fruits & Vegies",
    description:
      "Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables. ",
    image: FruitsCat,
    path: '/fruits'
  },
  {
    id: 2,
    title: "Dairy & Eggs",
    description:
      "Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses",
    image: Dairycat,
    path: '/dairy'
  },
  {
    id: 3,
    title: "Meat & SeaFood",
    description:
      "High-Quality, responsiblysourced meat and seafood. Choose from fresh cuts, marinated options, and more.",
    image: SeaFoodCat,
    path: '/seafood'
  },
];
