
import React from 'react';
import { Phone, Mail, MapPin, Globe, Database } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: '+91 2345 67890',
      link: 'tel:+912345678900'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'hello@reallygreatsite.com',
      link: 'mailto:hello@reallygreatsite.com'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Address',
      value: '123 Anywhere St. Any City',
      link: null
    },
    {
      icon: <Globe className="w-6 h-6" />,
      label: 'Website',
      value: 'www.reallygreatsite.com',
      link: 'https://www.reallygreatsite.com'
    }
  ];

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
              {contactInfo.map((contact, index) => (
                <div key={index} className="glass-effect rounded-lg p-4 hover:scale-105 transition-all duration-300">
                  {contact.link ? (
                    <a 
                      href={contact.link}
                      className="flex items-center gap-4 text-white hover:text-purple-300 transition-colors"
                    >
                      <div className="text-purple-300">
                        {contact.icon}
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">{contact.label}</p>
                        <p className="font-medium">{contact.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 text-white">
                      <div className="text-purple-300">
                        {contact.icon}
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
            
            {/* Database Note */}
            <div className="mt-8">
              <div className="inline-flex items-center gap-2 glass-effect rounded-full px-6 py-3 text-gray-300">
                <Database className="w-5 h-5" />
                <span className="text-sm">Contact info can be managed through database</span>
              </div>
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
