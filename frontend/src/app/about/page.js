import React from 'react';
import { MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const About = () => {
  return (
    <section className="py-16 xl:py-24 ">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Company Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About CodeIT DZ</h2>
            <p className="text-lg leading-relaxed mb-6">
              At CodeIT DZ, we specialize in providing top-notch IT and development courses tailored for both beginners and professionals. Our mission is to empower you with the skills and knowledge necessary to excel in today's technology-driven world. Join us to master the art of IT with hands-on experience and expert guidance.
            </p>
            <div className="flex items-center space-x-4">
              <MapPin size={24} />
              <p className="text-lg">Location: Birkhadem, Algiers, Algeria</p>
            </div>
          </div>

          {/* Location and Social Media */}
          <div className="flex flex-col items-center">
            {/* Location Map */}
            <div className="w-full h-64 rounded-lg overflow-hidden mb-6">
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.2877595948858!2d3.0532985755023128!3d36.71564967246167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fad1252df76a5%3A0xeaa6df44368f470f!2sCode%20IT%20dz!5e0!3m2!1sen!2sdz!4v1724843290736!5m2!1sen!2sdz"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="CodeIT DZ Location"
              ></iframe>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-6">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook size={28} className="hover:text-blue-600 dark:hover:text-blue-400" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={28} className="hover:text-pink-600 dark:hover:text-pink-400" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter size={28} className="hover:text-blue-400 dark:hover:text-blue-300" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={28} className="hover:text-blue-800 dark:hover:text-blue-600" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
