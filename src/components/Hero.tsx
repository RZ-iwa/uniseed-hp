import React from 'react';
import { Link } from 'react-scroll';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center"
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <img
          src="https://i.imgur.com/F9varI1.jpg"
          alt="AI Technology Background"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
          AIの恩恵を、
          <span className="text-accent">すべての人に</span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-gray-200 mb-12">
          デジタル格差のない社会を目指し、<br />
          ユーザに寄り添った優しいソリューションを提供します
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link
            to="blog"
            smooth={true}
            duration={500}
            className="btn-primary cursor-pointer"
          >
            サービスを見る
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="btn-secondary cursor-pointer"
          >
            お問い合わせ
          </Link>
        </div>

        <div className="flex justify-center">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="group cursor-pointer bg-white/10 backdrop-blur-sm hover:bg-white/20 p-4 rounded-full transition-all duration-300 border border-white/20 hover:border-white/40"
          >
            <ArrowDown className="h-6 w-6 text-white group-hover:translate-y-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
