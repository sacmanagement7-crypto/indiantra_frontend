import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HeroBanner() {
  const banners = [
    {
      id: 1,
      img: "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/92e784d9d65ad543.jpg?q=20",
      alt: "iPhone Deal",
    },
    {
      id: 2,
      img: "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/6b7d192cc2cf6c7b.jpg?q=20",
      alt: "Big Sale",
    },
    {
      id: 3,
      img: "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/6bbac26409e67bb1.jpg?q=20",
      alt: "Electronics",
    },
  ];

  return (
    <div className="w-full max-w-[1600px] mx-auto rounded-lg overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="w-full"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <img
              src={banner.img}
              alt={banner.alt}
              className="w-full h-[270px] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
