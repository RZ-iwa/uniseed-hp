import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Building2, Users2, Target } from 'lucide-react';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">事業概要</h2>
        
        <div
          ref={ref}
          className={`grid md:grid-cols-3 gap-8 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } transition-all duration-1000 ease-out`}
        >
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
              <Building2 className="text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">企業情報</h3>
            <p className="text-gray-600">
              2025年設立。生成AI技術を核として、「AIツール開発」「EC事業」「教育事業」の３つの事業を展開しています
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
              <Users2 className="text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">ミッション</h3>
            <p className="text-gray-600">
              AI技術の恩恵をすべての人に届け、
              デジタル格差のない社会を実現することを使命としています
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
              <Target className="text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">事業領域</h3>
            <p className="text-gray-600">
              AIツール開発、EC事業、教育事業を通じて、
              誰もが使いやすいAIソリューションを提供しています
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
