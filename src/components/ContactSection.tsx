
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Database } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

const ContactSection = () => {
  const { data: contactInfo, isLoading } = useQuery({
    queryKey: ['contact-info'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('contact_info')
        .select('*')
        .order('display_order');
      
      if (error) throw error;
      return data;
    }
  });

  const getIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName];
    return IconComponent ? <IconComponent className="w-6 h-6" /> : <Database className="w-6 h-6" />;
  };

  if (isLoading) {
    return (
      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
                CONTACT
                <br />
                INFORMATION
              </h2>
              
              <div className="space-y-6">
                {[...Array(4)].map((_, index) => (
                  <div key={index} className="glass-effect rounded-lg p-4 animate-pulse">
                    <div className="flex items-center gap-4">
                      <div className="w-6 h-6 bg-gray-400 rounded"></div>
                      <div>
                        <div className="h-4 w-16 bg-gray-400 rounded mb-2"></div>
                        <div className="h-5 w-32 bg-gray-400 rounded"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="floating-orb w-80 h-80 opacity-60"></div>
              <div className="floating-orb w-32 h-32 -top-16 -right-16 opacity-40" style={{ animationDelay: '3s' }}></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Contact Information */}
          <div className="flex-1">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              CONTACT
              <br />
              INFORMATION
            </h2>
            
            <div className="space-y-6">
              {contactInfo?.map((contact) => (
                <div key={contact.id} className="glass-effect rounded-lg p-4 hover:scale-105 transition-all duration-300">
                  {contact.link ? (
                    <a 
                      href={contact.link}
                      className="flex items-center gap-4 text-white hover:text-purple-300 transition-colors"
                    >
                      <div className="text-purple-300">
                        {getIcon(contact.icon_name)}
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">{contact.label}</p>
                        <p className="font-medium">{contact.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 text-white">
                      <div className="text-purple-300">
                        {getIcon(contact.icon_name)}
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">{contact.label}</p>
                        <p className="font-medium">{contact.value}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Decorative Element */}
          <div className="relative">
            <div className="floating-orb w-80 h-80 opacity-60"></div>
            <div className="floating-orb w-32 h-32 -top-16 -right-16 opacity-40" style={{ animationDelay: '3s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
