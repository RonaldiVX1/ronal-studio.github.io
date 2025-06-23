
import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-20 px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="relative">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white/20 glass-effect">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="floating-orb w-16 h-16 -bottom-8 -right-8 opacity-60"></div>
          </div>
          
          {/* About Content */}
          <div className="flex-1 text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">ABOUT ME</h2>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                I am a Mobile Developer and UI/UX Designer with a strong background in 
                cross-platform and native mobile application development. Skilled in 
                Kotlin, Dart (Flutter), and Swift, I am capable of building high-quality 
                applications for both Android and iOS platforms.
              </p>
              <p>
                My expertise covers the entire development lifecycle— from wireframing and 
                interface design to coding, testing, and publishing. I have been actively 
                involved in the deployment process of multiple mobile applications to both 
                the Google Play Store and Apple App Store.
              </p>
              <p>
                My work emphasizes clean architecture, responsive and modern UI/UX, and 
                performance optimization, ensuring each app meets platform guidelines and 
                delivers a seamless user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
