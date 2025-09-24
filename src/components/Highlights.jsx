import { FaTrophy, FaStar, FaTags } from "react-icons/fa";

export default function Highlights() {
  const highlights = [
    {
      id: 1,
      icon: <FaTrophy className="text-orange-600 text-3xl" />,
      title: "Best Seller Products",
      desc: "Most popular Swadeshi products loved by our customers.",
      bg: "bg-orange-100",
    },
    {
      id: 2,
      icon: <FaStar className="text-yellow-600 text-3xl" />,
      title: "Best Indian Products",
      desc: "Top-quality Indian products from trusted Swadeshi brands.",
      bg: "bg-yellow-100",
    },
    {
      id: 3,
      icon: <FaTags className="text-green-600 text-3xl" />,
      title: "Special Offers",
      desc: "Exclusive deals and discounts on Swadeshi products.",
      bg: "bg-green-100",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-3 gap-6">
        {highlights.map((item) => (
          <div
            key={item.id}
            className={`${item.bg} rounded-xl p-6 shadow-sm hover:shadow-md transition`}
          >
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white shadow">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
