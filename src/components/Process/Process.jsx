import React from "react";
import Heading from "../../Heading/Heading";
import { PiPlant, PiFactory } from "react-icons/pi";
import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
  TbCircleNumber4Filled,
} from "react-icons/tb";
import { SlBadge } from "react-icons/sl";
import { BsTruck } from "react-icons/bs";

const Process = () => {

    const renderSteps = steps.map(item => {
        return(
            <div key={item.id} className={`flex-1 basis-75 ${item.id % 2 === 0 ? 'md:-mt-100' : ''}`}>
                <span className="text-8xl mx-auto h-18 w-18 bg-zinc-800 outline-3 rounded-full outline-offset-7 outline-zinc-800 outline-dashed flex justify-center items-center text-white">{item.number}</span>

                <div className="flex items-center md:mt-10 mt-5 gap-x-5">
                   
                        <span className="flex bg-linear-to-b from-orange-400 to-orange-500 text-white h-15 w-15 rounded-full justify-center items-center text-3xl">{item.icon}</ span>
                    

                    <div className="flex-1">
                        <h4 className="text-zinc-800 text-2xl font-bold">{item.title}</h4>
                        <p className="text-zinc-600 mt-2">{item.para}</p>
                    </div>
                </div>
            </div>
        )
    })
  return (
    <section>
      <div className="max-w-350 mx-auto py-20 px-10 ">
        <div className="mr-auto w-fit">
          <Heading highlight="Our" heading="Process" />
        </div>

        <div className="flex flex-wrap justify-center gap-y-20 items-center mt-20 md:pt-50 ">
            {renderSteps}
        </div>
      </div>
    </section>
  );
};

export default Process;

const steps = [
  {
    id: 1,
    number: <TbCircleNumber1Filled />,
    title: "Sourcing",
    para: "It is a long established fact that a reader",
    icon: <PiPlant />,
  },
  {
    id: 2,
    number: <TbCircleNumber2Filled />,
    title: "Manufacturing",
    para: "It is a long established fact that a reader",
    icon: <PiFactory />,
  },
  {
    id: 3,
    number: <TbCircleNumber3Filled />,
    title: "Quality Control",
    para: "It is a long established fact that a reader",
    icon: <SlBadge />,
  },
  {
    id: 4,
    number: <TbCircleNumber4Filled />,
    title: "Logistics",
    para: "It is a long established fact that a reader",
    icon: <BsTruck />,
  },
];
