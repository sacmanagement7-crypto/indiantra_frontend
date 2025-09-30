import React from 'react';
import { Calendar, Users, Award, Target, Heart, TrendingUp, MapPin, Sparkles } from 'lucide-react';

const Journey = () => {
  const milestones = [
    {
      year: '2020',
      title: 'The Beginning',
      description: 'Started our journey with a simple vision to bring quality products to every home.',
      icon: Sparkles,
      color: 'from-orange-400 to-orange-500'
    },
    {
      year: '2021',
      title: 'First Milestone',
      description: 'Reached 10,000 happy customers and expanded our product range to 500+ items.',
      icon: Users,
      color: 'from-orange-500 to-orange-600'
    },
    {
      year: '2022',
      title: 'Going National',
      description: 'Expanded delivery to all major cities across the country with faster shipping.',
      icon: MapPin,
      color: 'from-orange-600 to-red-500'
    },
    {
      year: '2023',
      title: 'Award Recognition',
      description: 'Received "Best E-commerce Platform" award for customer satisfaction and quality.',
      icon: Award,
      color: 'from-red-500 to-red-600'
    },
    {
      year: '2024',
      title: 'Innovation & Growth',
      description: 'Launched mobile app and AI-powered recommendations for personalized shopping.',
      icon: TrendingUp,
      color: 'from-orange-500 to-orange-600'
    },
    {
      year: '2025',
      title: 'Future Forward',
      description: 'Committed to sustainability with eco-friendly packaging and carbon-neutral delivery.',
      icon: Target,
      color: 'from-orange-600 to-orange-700'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Every decision we make is centered around delivering the best experience to our customers.'
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'We carefully curate every product to ensure it meets our high standards of quality.'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Building a community of satisfied customers who trust us for their shopping needs.'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Growth',
      description: 'Always evolving and improving to serve you better with innovative solutions.'
    }
  ];

  const stats = [
    { number: '100K+', label: 'Happy Customers' },
    { number: '5000+', label: 'Products' },
    { number: '50+', label: 'Cities' },
    { number: '4.8/5', label: 'Rating' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Our Journey</h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
            From a small startup to a trusted e-commerce platform, discover the story of how we've grown 
            to serve thousands of customers with passion and dedication.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-orange-50 to-transparent"></div>
      </div>

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto px-6 -mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-100 text-center transform hover:-translate-y-1 transition">
              <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Milestones That Matter</h2>
          <p className="text-gray-600 text-lg">Every step of our journey has been about serving you better</p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-orange-300 to-orange-500 hidden lg:block"></div>

          {/* Milestones */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={index} className="relative">
                  <div className={`flex flex-col lg:flex-row items-center gap-8 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    {/* Content */}
                    <div className={`flex-1 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                      <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-100 hover:shadow-xl transition transform hover:-translate-y-1">
                        <div className="flex items-center gap-3 mb-3 lg:justify-start">
                          <div className={`bg-gradient-to-br ${milestone.color} p-2 rounded-lg`}>
                            <Icon className="text-white" size={24} />
                          </div>
                          <span className="text-2xl font-bold text-orange-600">{milestone.year}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>

                    {/* Center Icon */}
                    <div className="hidden lg:block">
                      <div className={`w-16 h-16 bg-gradient-to-br ${milestone.color} rounded-full shadow-lg flex items-center justify-center border-4 border-white`}>
                        <Icon className="text-white" size={28} />
                      </div>
                    </div>

                    {/* Spacer */}
                    <div className="flex-1 hidden lg:block"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gradient-to-br from-orange-100 to-orange-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <p className="text-gray-600 text-lg">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition border border-orange-200 transform hover:-translate-y-2">
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-12 shadow-2xl text-white text-center">
          <Target className="mx-auto mb-6 text-orange-100" size={64} />
          <h2 className="text-4xl font-bold mb-6">Our Vision for the Future</h2>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto leading-relaxed mb-8">
            To become the most trusted e-commerce platform in the region, where every customer 
            finds exactly what they need with the confidence of quality, affordability, and 
            exceptional service. We're committed to sustainable growth that benefits our customers, 
            partners, and the environment.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="font-semibold">Sustainability</span>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="font-semibold">Innovation</span>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="font-semibold">Customer Delight</span>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Meet Our Team</h2>
          <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            A dedicated group of professionals working tirelessly to bring you the best shopping experience
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-6 shadow-md hover:shadow-xl transition border border-orange-100">
                <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="text-white" size={48} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Team Member {item}</h3>
                <p className="text-orange-600 font-medium mb-3">Position Title</p>
                <p className="text-gray-600 text-sm">
                  Passionate about delivering excellence and creating memorable customer experiences.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-br from-orange-500 via-orange-600 to-red-500 rounded-3xl p-12 shadow-2xl text-white text-center">
          <h2 className="text-4xl font-bold mb-6">Be Part of Our Story</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us for their shopping needs
          </p>
          <button className="bg-white text-orange-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-50 transition shadow-lg transform hover:-translate-y-1">
            Start Shopping Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Journey;