"use client";
import { blogCard } from "@/utils/types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "@/styles/swiperFix.css";
import Otherinfo from "./Otherinfo";
import Image from "next/image";

const Hero = ({ Blogs }: { Blogs: blogCard[] }) => {
  return (
    <div>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {Blogs.map((item, index) => {
          return (
            <SwiperSlide key={index} className="group">
              <div className=" relative rounded-2xl overflow-hidden">
                <Image
                 width={500}  
                 height={300} 
                  className="w-full h-[400px] object-cover brightness-75 transition-all duration-500 group-hover:brightness-50 "
                  src={item.image}
                  alt={item.title}
                />
              </div>
              <div className=" absolute bottom-5 left-0 z-50">
                <div className=" col-span-4 mb-4 flex h-full flex-1 justify-end px-5">
                  <Otherinfo item={item} />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Hero;
