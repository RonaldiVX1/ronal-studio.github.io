
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Database } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

const TechStackSection = () => {
  const { data: techStacks, isLoading } = useQuery({
    queryKey: ['tech-stack'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('tech_stack')
        .select('*')
        .order('created_at');
      
      if (error) throw error;
      return data;
    }
  });

  const getIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName];
    return IconComponent ? <IconComponent className="w-8 h-8" /> : <Database className="w-8 h-8" />;
  };

  if (isLoading) {
    return (
      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
            TECH STACK
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="glass-effect rounded-xl p-6 animate-pulse">
                <div className="w-8 h-8 bg-gray-400 rounded mb-4"></div>
                <div className="h-6 bg-gray-400 rounded mb-2"></div>
                <div className="h-4 bg-gray-400 rounded mb-2"></div>
                <div className="h-4 bg-gray-400 rounded"></div>
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
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
          TECH STACK
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techStacks?.map((tech) => (
            <div 
              key={tech.id} 
              className="glass-effect rounded-xl p-6 hover:scale-105 transition-all duration-300 group"
            >
              <div className="text-purple-300 mb-4 group-hover:text-pink-300 transition-colors">
                {getIcon(tech.icon_name || 'Database')}
              </div>
              <h3 className="text-white text-xl font-bold mb-2">{tech.name}</h3>
              <p className="text-gray-400 text-sm mb-2">{tech.category}</p>
              <p className="text-gray-300 text-sm">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
