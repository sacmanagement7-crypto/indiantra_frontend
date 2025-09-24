import Clothing from "../assets/Clothing.png"
import Grocery from "../assets/Grocery.png"
import Herbal from "../assets/Herbal.png"
import Handicrafts from "../assets/Handicrafts.png"
import jwelery from "../assets/jwelery.png"
import Home from "../assets/Home.png"
const categories = [
  {
    id: 1,
    image: `${Clothing}`, // adjust path
  },
  {
    id: 2,
    image: `${Grocery}`,
  },
  {
    id: 3,
    image: `${Herbal}`,
  },
  {
    id: 4,
    image: `${Handicrafts}`,
  },
  {
    id: 5,
    image: `${Home}`,
  },
  {
    id: 6,
    image: `${jwelery}`,
  },
];

export default function CategorySection() {
  return (
    <div className="w-full border-t-2 border-orange-500 py-8">
      <div className="grid grid-cols-2 md:grid-cols-6 text-center">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="flex flex-col items-center justify-center space-y-3 cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            {/* Fixed square box for alignment */}
            <div className="flex items-center justify-center w-24 h-24">
              <img
                src={cat.image}
                alt={cat.name}
                className="max-h-24 max-w-24 object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

