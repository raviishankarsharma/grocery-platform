import React from "react";

let Button = (props) => {
  return <button className='py-3 px-8 bg-linear-to-b from-orange-400 to-orange-500 text-white rounded text-lg font-medium hover:scale-95 hover:to-orange-600 transition-all duration-200 cursor-pointer'>
     {props.content}
  </button>;
};

export default Button;