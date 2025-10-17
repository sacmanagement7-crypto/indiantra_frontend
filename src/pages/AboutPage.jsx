import { FaQuoteLeft } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-50 via-white to-green-50 py-12">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            About <span className="text-orange-600">Indiantra</span>
          </h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Indiantra is a leading online store offering a wide range of{" "}
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
              sell their products on Indiantra
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

      {/* About Us - Detailed Content */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4 space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold text-orange-600 text-center">
            Indiantra e-commerce
          </h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            At Indiantra e-commerce, we believe that every product carries a story—a story of hands that create, communities that nurture, and traditions that live on. Our platform was born with a simple yet powerful vision: to promote Swadeshi values by connecting India’s rural artisans, women entrepreneurs, and local industries directly with customers across the country and beyond.
          </p>

          <h3 className="text-xl font-bold text-green-700">The Heart of Our Mission</h3>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Our initiative is powered by the women of Swayam Sahita Samuh, a self-help group of talented and determined ladies who channel their creativity into handmade products. Each item they make—whether it is handcrafted textiles, eco-friendly goods, home décor, or traditional crafts—represents not just skill, but also resilience, cultural pride, and self-reliance.
          </p>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            By partnering with Sahkari Samiti and local industries, we have created a unique ecosystem that uplifts artisans, provides fair trade opportunities, and strengthens community bonds. This collaboration ensures that traditional skills are preserved while also providing modern market access to rural talents.
          </p>

          <h3 className="text-xl font-bold text-green-700">What Makes Us Different?</h3>
          <ul className="list-disc list-inside text-gray-700 text-sm md:text-base space-y-2">
            <li><span className="font-semibold">Women Empowerment at the Core:</span> Our platform enables women to achieve financial independence, dignity, and recognition for their work.</li>
            <li><span className="font-semibold">Swadeshi First:</span> We are committed to the “Vocal for Local” movement by promoting products that are 100% Indian-made and rooted in heritage.</li>
            <li><span className="font-semibold">Sustainable Choices:</span> Every product is eco-conscious, reflecting our responsibility towards the environment.</li>
            <li><span className="font-semibold">Community Growth:</span> We don’t just sell; we reinvest in local talent, creating a cycle of progress and prosperity.</li>
          </ul>

          <h3 className="text-xl font-bold text-green-700">Our Vision</h3>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            We envision a future where rural artisans and women-led groups are celebrated as the backbone of India’s economy. A future where every handmade product finds its rightful place in the world market, not just as a commodity, but as a piece of Indian culture and tradition.
          </p>

          <h3 className="text-xl font-bold text-green-700">Our Promise to You</h3>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            When you shop with Indiantra e-commerce, you are not just making a purchase—you are becoming a part of a movement. A movement that supports women, strengthens local industries, encourages sustainable living, and celebrates the spirit of Swadeshi Bharat.
          </p>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed font-semibold">
            Together, let us build a marketplace that values people as much as products, and traditions as much as trends. Choose Swadeshi. Support women. Celebrate Handmade.
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
                I have bought many Swadeshi products online from Indiantra and I’m really
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
                I am a homemade products manufacturer and sell many items on Indiantra.  
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
