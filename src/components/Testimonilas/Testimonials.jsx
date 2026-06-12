import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import { FaStar } from "react-icons/fa";

import Heading from "../../Heading/Heading";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Customer1 from "../../assets/customer1.jpg";
import Customer2 from "../../assets/customer2.jpg";
import Customer3 from "../../assets/customer3.jpg";
import Customer4 from "../../assets/customer4.jpg";
import Customer5 from "../../assets/customer5.jpg";

const Testimonials = () => {
  return (
    <section>
      <div className="max-w-350 mx-auto px-10 py-20 ">
        <Heading highlight="Customers" heading="Saying" />

        <div className="custom-prev py-5 flex justify-end gap-x-3">
          <button className="text-2xl rounded-lg w-11 h-11 bg-zinc-100 flex justify-center items-center text-zinc-800 hover:bg-linear-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer">
            <IoIosArrowBack />
          </button>
          <button className="custom-nxt text-2xl rounded-lg w-11 h-11 bg-zinc-100 flex justify-center items-center text-zinc-800 hover:bg-linear-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer">
            <IoIosArrowForward />
          </button>
        </div>

        <Swiper navigation={{
          nextEl: ".custom-nxt",
          prevEl: ".custom-prev"
        }}
        loop={true}
        breakpoints={{
          640: {slidesPerView: 1, spaceBetween:20},
          768: {slidesPerView: 2, spaceBetween:20},
          1024: {slidesPerView: 3, spaceBetween:20},
        }}
         modules={[Navigation]} className="mySwiper">
          {review.map((item,idx) => {
            return (
              <SwiperSlide key={idx} className="bg-zinc-100 rounded-xl p-8">
                <div className="flex gap-x-5 items-center">
                  <div className="h-16 w-16 bg-red-500 rounded-full outline-2 outline-orange-500 outline-offset-4 overflow-hidden"><img src={item.image} className="w-full h-full"/></div>
                  <div>
                    <h5 className="text-xl font-bold">{item.name}</h5>
                    <p className="text-zinc-600">{item.profession}</p>
                    <span className="flex text-amber-400 gap-1 mt-3 text-xl">{Array.from({length: item.rating}, (_, index)=>(<FaStar key={index}/>))}</span>
                  </div>
                </div>

                <div className="mt-10 min-h-[15vh]">
                  <p className="text-zinc-600">
                    {item.para}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;

const review = [
  {
    id: 1,
    name: "Emily Johnson",
    profession: "Food Blogger",
    rating: 3,
    para: "FreshBasket is my go-to store for all grocery needs. Their produce is always fresh, and the delivery is super fast. I love the user-friendly interface and variety of organic options! ",
    image: Customer1,
  },
  {
    id: 2,
    name: "David Smith",
    profession: "Chef",
    rating: 4,
    para: "As a chef, quality ingredients are everything. FreshBasket consistently delivers the best vegetables, and pantry staples. Highly recommended!",
    image: Customer2,
  },
  {
    id: 3,
    name: "Alya Zahra",
    profession: "Model",
    rating: 3,
    para: "Shopping online with FreshBasket has saved me so much time. I trust them for my family`s weekly groceries-alwaysfresh, affordable, and reliable.",
    image: Customer3,
  },
  {
    id: 4,
    name: "Carlos Mendes",
    profession: "Fitness Coach",
    rating: 5,
    para: "I appreciate the selection of healthy foods and clean-label products. FreshBasket has been a great partner in my wellness jouney!",
    image: Customer4,
  },
  {
    id: 5,
    name: "Natcha Phongchai",
    profession: "Nutritionist",
    rating: 3,
    para: "FreshBasket offers hgh-quality  groceries at reasonable prices. their organic section is impressive, and their customer service is top-notch.",
    image: Customer5,
  },
];
