
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { ExternalLink, Github } from 'lucide-react';

const PortfolioSection = () => {
  const { data: portfolioItems, isLoading } = useQuery({
    queryKey: ['portfolio-projects'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('portfolio_projects')
        .select('*')
        .order('display_order');
      
      if (error) throw error;
      return data;
    }
  });

  if (isLoading) {
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
            {[...Array(4)].map((_, index) => (
              <div key={index} className="glass-effect rounded-xl overflow-hidden animate-pulse">
                <div className="h-48 bg-gray-400"></div>
                <div className="p-6">
                  <div className="h-6 bg-gray-400 rounded mb-3"></div>
                  <div className="flex gap-2 mb-4">
                    <div className="h-6 w-16 bg-gray-400 rounded-full"></div>
                    <div className="h-6 w-20 bg-gray-400 rounded-full"></div>
                  </div>
                  <div className="h-4 bg-gray-400 rounded mb-2"></div>
                  <div className="h-4 bg-gray-400 rounded mb-4"></div>
                  <div className="flex gap-3">
                    <div className="h-10 w-24 bg-gray-400 rounded"></div>
                    <div className="h-10 w-20 bg-gray-400 rounded"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

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
          {portfolioItems?.map((item) => (
            <div 
              key={item.id} 
              className="glass-effect rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image_url || 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop'} 
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-white text-xl font-bold mb-3">{item.title}</h3>
                
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tech_stack?.map((tech, index) => (
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
                  {item.live_url && (
                    <a
                      href={item.live_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Live
                    </a>
                  )}
                  {item.github_url && (
                    <a
                      href={item.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-purple-400/30 hover:border-purple-400 text-purple-200 rounded-lg transition-colors text-sm"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
