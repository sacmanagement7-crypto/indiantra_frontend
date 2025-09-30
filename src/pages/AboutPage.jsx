import { FaQuoteLeft } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-50 via-white to-green-50 py-12">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            About <span className="text-orange-600">Swadeshi Mall</span>
          </h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Swadeshi Mall is a leading online store offering a wide range of{" "}
            <span className="font-semibold text-orange-600">Swadeshi Products</span> made in India.  
            Our mission is to empower local manufacturers and promote indigenous products globally.
          </p>
        </div>
      </section>

      {/* Mission & Goal */}
      <section className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8">
        <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-orange-600 mb-3">Our Mission</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            Our noble aim is to ensure that the people of India can easily access 
            the best locally-made products while helping Indian manufacturers 
            showcase their craftsmanship.  
            We encourage everyone to{" "}
            <span className="font-medium text-green-700">
              sell their products on Swadeshi Mall
            </span> and contribute to this movement.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-orange-600 mb-3">Our Goal</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            We aim to reach even the smallest villages to encourage people who 
            make things by hand. By 2025, we target uploading{" "}
            <span className="font-medium text-green-700">200+ Desi products</span> 
            from vendors and manufacturers across India, strengthening the 
            Made in India movement.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-to-r from-yellow-50 via-white to-green-50 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-green-700 uppercase mb-8 tracking-wide">
            What Our Customers Say
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-white border border-orange-200 rounded-2xl shadow-md p-6 relative hover:shadow-xl transition duration-300">
              <FaQuoteLeft className="text-orange-400 text-2xl absolute top-4 left-4 opacity-50" />
              <p className="italic text-gray-700 mb-4 leading-relaxed text-left text-sm">
                I have bought many Swadeshi products online from Swadeshi Mall and I’m really
                satisfied with the quality. This is a genuine site that I recommend
                to everyone who wants to buy Made in India products.
              </p>
              <div className="text-left mt-2">
                <h4 className="font-semibold text-gray-900 text-sm">Shailesh Patel</h4>
                <span className="text-gray-500 text-xs">Customer</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-orange-200 rounded-2xl shadow-md p-6 relative hover:shadow-xl transition duration-300">
              <FaQuoteLeft className="text-orange-400 text-2xl absolute top-4 left-4 opacity-50" />
              <p className="italic text-gray-700 mb-4 leading-relaxed text-left text-sm">
                I am a homemade products manufacturer and sell many items on Swadeshi Mall.  
                My business has grown significantly and I can now earn a good income 
                selling my products online across India.
              </p>
              <div className="text-left mt-2">
                <h4 className="font-semibold text-gray-900 text-sm">Krishna Shah</h4>
                <span className="text-gray-500 text-xs">Homemade Product Manufacturer</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
