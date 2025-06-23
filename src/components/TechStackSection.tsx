
import React from 'react';
import { Smartphone, Code, Palette, Database } from 'lucide-react';

const TechStackSection = () => {
  const techStacks = [
    {
      name: 'Kotlin',
      category: 'Mobile Development',
      icon: <Smartphone className="w-8 h-8" />,
      description: 'Native Android development'
    },
    {
      name: 'Flutter',
      category: 'Cross-Platform',
      icon: <Code className="w-8 h-8" />,
      description: 'Cross-platform mobile apps'
    },
    {
      name: 'Swift',
      category: 'Mobile Development',
      icon: <Smartphone className="w-8 h-8" />,
      description: 'Native iOS development'
    },
    {
      name: 'React',
      category: 'Web Development',
      icon: <Palette className="w-8 h-8" />,
      description: 'Modern web applications'
    }
  ];

  return (
    <section className="py-20 px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
          TECH STACK
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techStacks.map((tech, index) => (
            <div 
              key={index} 
              className="glass-effect rounded-xl p-6 hover:scale-105 transition-all duration-300 group"
            >
              <div className="text-purple-300 mb-4 group-hover:text-pink-300 transition-colors">
                {tech.icon}
              </div>
              <h3 className="text-white text-xl font-bold mb-2">{tech.name}</h3>
              <p className="text-gray-400 text-sm mb-2">{tech.category}</p>
              <p className="text-gray-300 text-sm">{tech.description}</p>
            </div>
          ))}
        </div>
        
        {/* Database Note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 glass-effect rounded-full px-6 py-3 text-gray-300">
            <Database className="w-5 h-5" />
            <span className="text-sm">Tech stack can be managed through database</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
