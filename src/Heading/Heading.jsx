import React from "react";


const Heading = (props) => {
  return (
    <div className="w-fit mx-auto">
      <h2 className="text-zinc-800 md:text-[2.5rem] text-[1.8rem] font-bold">
        <span className="text-orange-500">{props.highlight}</span> {props.heading}.
      </h2>
      <div className="md:w-30 w-21 h-1 bg-orange-300 md:mt-2 mt-1 ml-auto"></div>
    </div>
  );
};

export default Heading;

