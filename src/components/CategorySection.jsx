import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default function CategorySection() {
  const { categories = [] } = useContext(ShopContext);
  const navigate = useNavigate();

  // Responsive slides
  const slidesPerViewDefault = Math.min(categories.length || 1, 8);
  const sp320 = Math.min(categories.length, 3);
  const sp640 = Math.min(categories.length, 4);
  const sp768 = Math.min(categories.length, 6);
  const sp1024 = Math.min(categories.length, 8);

  return (
    <div className="w-full bg-white shadow-sm py-2 px-2 max-w-7xl mx-auto relative">
      <Swiper
        modules={[Navigation]}
        navigation={true}
        spaceBetween={5}
        slidesPerView={slidesPerViewDefault}
        breakpoints={{
          320: { slidesPerView: sp320 },
          640: { slidesPerView: sp640 },
          768: { slidesPerView: sp768 },
          1024: { slidesPerView: sp1024 },
        }}
        grabCursor={true}
        className="custom-swiper"
      >
        {categories.map((cat, idx) => (
          <SwiperSlide key={cat.id}>
            <div className="flex flex-col items-center text-center group">
              {/* Category Tile */}
              <div
                onClick={() => navigate(`/shop?category=${cat.name}`)}
                className={`w-16 h-16 rounded-lg overflow-hidden flex items-center justify-center cursor-pointer
                ${idx === 0 ? "bg-[#ffb938]" : "bg-yellow-50"} 
                group-hover:shadow-md transition-all duration-200`}
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-12 h-12 object-contain"
                />
              </div>

              {/* Label */}
              <p
                onClick={() => navigate(`/shop?category=${cat.name}`)}
                className="mt-1 text-xs md:text-sm font-medium text-gray-800 group-hover:text-[#ff8a00] cursor-pointer"
              >
                {cat.name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ✅ Custom Swiper Navigation Styling */}
      <style jsx global>{`
        .custom-swiper .swiper-button-next,
        .custom-swiper .swiper-button-prev {
          top: 40%;
          z-index: 50;
          border-radius: none;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffb938;
          transition: all 0.3s ease;
        }
        .custom-swiper .swiper-button-next::after,
        .custom-swiper .swiper-button-prev::after {
          font-size: 16px;
          font-weight: bold;
        }
        .custom-swiper .swiper-button-next:hover,
        .custom-swiper .swiper-button-prev:hover {
          color: #fff;
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
}
