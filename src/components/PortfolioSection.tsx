
import React from 'react';
import { ExternalLink, Github, Database } from 'lucide-react';

const PortfolioSection = () => {
  const portfolioItems = [
    {
      id: 1,
      title: 'E-Commerce Mobile App',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
      tech: ['Flutter', 'Firebase', 'Dart'],
      description: 'A comprehensive e-commerce application with real-time inventory, payment integration, and user authentication.'
    },
    {
      id: 2,
      title: 'Social Media Dashboard',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
      tech: ['React', 'Node.js', 'MongoDB'],
      description: 'Analytics dashboard for social media management with real-time data visualization and reporting features.'
    },
    {
      id: 3,
      title: 'Fitness Tracking App',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      tech: ['Swift', 'HealthKit', 'Core Data'],
      description: 'iOS fitness application with workout tracking, progress monitoring, and health data integration.'
    },
    {
      id: 4,
      title: 'Restaurant Management',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop',
      tech: ['Kotlin', 'Room', 'Retrofit'],
      description: 'Android application for restaurant order management with inventory tracking and customer management.'
    }
  ];

  return (
    <section className="py-20 px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            PORTFOLIO
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioItems.map((item) => (
            <div 
              key={item.id} 
              className="glass-effect rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-white text-xl font-bold mb-3">{item.title}</h3>
                
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tech.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-purple-500/30 text-purple-200 text-sm rounded-full border border-purple-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>
                
                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors text-sm">
                    <ExternalLink className="w-4 h-4" />
                    View Live
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 border border-purple-400/30 hover:border-purple-400 text-purple-200 rounded-lg transition-colors text-sm">
                    <Github className="w-4 h-4" />
                    Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Database Note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 glass-effect rounded-full px-6 py-3 text-gray-300">
            <Database className="w-5 h-5" />
            <span className="text-sm">Portfolio projects can be managed through database</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
