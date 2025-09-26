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

  const slidesPerViewDefault = Math.min(categories.length || 1, 6);
  const sp320 = Math.min(categories.length, 2);
  const sp640 = Math.min(categories.length, 3);
  const sp768 = Math.min(categories.length, 4);
  const sp1024 = Math.min(categories.length, 6);

  return (
    <div className="w-full border-t-2 border-yellow-500 py-8">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={slidesPerViewDefault}
        navigation
        breakpoints={{
          320: { slidesPerView: sp320 },
          640: { slidesPerView: sp640 },
          768: { slidesPerView: sp768 },
          1024: { slidesPerView: sp1024 },
        }}
        grabCursor={true}
        className="custom-swiper"
      >
        {categories.map((cat) => (
          <SwiperSlide key={cat.id}>
            <div
              onClick={() => navigate(`/shop?category=${cat.name}`)} // 👈 navigate with category
              className="flex flex-col items-center justify-center text-center cursor-pointer hover:scale-105 transition-transform duration-200"
            >
              <div className="flex items-center justify-center w-28 h-28 bg-yellow-50 rounded-full shadow hover:shadow-lg hover:bg-yellow-100 transition">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-20 h-20 object-contain"
                />
              </div>
              <p className="mt-3 text-sm font-medium text-gray-800">{cat.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ✅ Custom Swiper Navigation Styling */}
      <style jsx global>{`
        .custom-swiper .swiper-button-next,
        .custom-swiper .swiper-button-prev {
          color: #facc15; /* Tailwind yellow-400 */
          transition: all 0.3s ease;
        }
        .custom-swiper .swiper-button-next:hover,
        .custom-swiper .swiper-button-prev:hover {
          color: #eab308; /* Tailwind yellow-500 on hover */
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
}
