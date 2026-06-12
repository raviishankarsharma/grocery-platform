import React from "react";
import Heading from "../../Heading/Heading";
import { FaHeart, FaLeaf, FaSeedling, } from "react-icons/fa6";
import { FaShieldAlt } from "react-icons/fa";
import Basket from "../../assets/basket-full-vegetables.png"

const Values = () => {
  const LeftValues = Value.slice(0, 2).map((item, idx) => {
    return (
      <div key={idx} className="flex md:flex-row-reverse items-center gap-5">
        <div >
          <span className="flex justify-center items-center text-3xl text-white bg-linear-to-b from-orange-400 to-orange-500 h-14 w-14 rounded-full">{item.icon}</span>
        </div>

        <div className="md:text-right">
          <h3 className="font-bold text-3xl text-zinc-800 ">{item.title}</h3>
          <p className="text-zinc-600 mt-2">{item.para}</p>
        </div>
      </div>
    );
  });
  
  const RightValues = Value.slice(2).map((item, idx) => {
    return (
      <div key={idx} className="flex items-center gap-5">
        <div >
          <span className="flex justify-center items-center text-3xl text-white bg-linear-to-b from-orange-400 to-orange-500 h-14 w-14 rounded-full">{item.icon}</span>
        </div>

        <div >
          <h3 className="font-bold text-3xl text-zinc-800 ">{item.title}</h3>
          <p className="text-zinc-600 mt-2">{item.para}</p>
        </div>
      </div>
    );
  });
  

  return (
    <section>
      <div className="max-w-350 mx-auto px-10 py-20">
        <Heading highlight="Our" heading="Values" />
        <div className="flex md:flex-row flex-col gap-5 mt-15">
          {/* Left-Values */}
          <div className="md:min-h-100 flex flex-col gap-5 justify-between">
            {LeftValues}
          </div>

          <div className="md:flex w-1/2 hidden">
            <img src={Basket}/>
          </div>

          {/* Right-Values */}
          <div className="md:min-h-100 gap-5 flex flex-col justify-between">{RightValues}</div>
        </div>
      </div>
    </section> 
  );
};

export default Values;

const Value = [
  {
    id: 1,
    title: "Trust",
    para: "It is a long established fact that a reader will be distracted by the readable.",
    icon: <FaHeart />,
  },
  {
    id: 2,
    title: "Always Fresh",
    para: "It is a long established fact that a reader will be distracted by the readable.",
    icon: <FaLeaf />,
  },
  {
    id: 3,
    title: "Food Safety",
    para: "Lorem ipsum is simply dummy text of the printing and type setting industry.",
    icon: <FaShieldAlt />,
  },
  {
    id: 4,
    title: "100% Organic",
    para: "It is a long established fact that a reader will be distracted by the readable.",
    icon: <FaSeedling />,
  },
];
