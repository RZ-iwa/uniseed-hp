import React from 'react';
import { useInView } from 'react-intersection-observer';
import { BrainCircuit, GraduationCap, ShoppingBag, ArrowRight, Clock } from 'lucide-react';

const Blog = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleServiceClick = () => {
    window.open('https://mirai-compass.uniseed.life/', '_blank');
  };

  const handleStoryClick = () => {
    window.open('https://short-stories.uniseed.life/', '_blank');
  };

  const services = [
    {
      title: 'AIツール開発',
      icon: BrainCircuit,
      description: '専門知識がなくても活用できる、使いやすいAIツールを開発しています。',
      items: [
        {
          title: '文書要約・議事録作成ツール',
          image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80',
          status: 'preparation'
        },
        {
          title: 'AI搭載カスタマーサポートボット',
          image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80',
          status: 'preparation'
        }
      ]
    },
    {
      title: 'EC事業',
      icon: ShoppingBag,
      description: 'AIによるトレンド分析から生まれた、暮らしを豊かにする商品を提供。',
      items: [
        {
          title: 'アロマフォルマ ヘルスケアシリーズ',
          image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80',
          status: 'preparation'
        },
        {
          title: 'AI提案型パーソナライズ商品',
          image: 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&q=80',
          status: 'preparation'
        }
      ]
    },
    {
      title: '教育事業',
      icon: GraduationCap,
      description: '受験や学習に全力で向き合うご家庭をサポートする教育サービスを提供',
      items: [
        {
          title: '学校説明会キャンセル通知サービス',
          image: 'https://i.imgur.com/2Rhxwq2.jpg',
          status: 'available',
          onClick: handleServiceClick
        },
        {
          title: '中学受験ショートストーリー（短編小説）',
          image: 'https://i.imgur.com/dhoagNz.jpg',
          status: 'available',
          onClick: handleStoryClick
        }
      ]
    }
  ];

  return (
    <section id="blog" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">サービス</h2>
        
        <div
          ref={ref}
          className={`space-y-16 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } transition-all duration-1000 ease-out`}
        >
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl">
                    <service.icon className="text-primary w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold ml-4">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-8">{service.description}</p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {service.items.map((item, idx) => (
                    <div key={idx} className="group relative">
                      <div 
                        className="aspect-video overflow-hidden rounded-xl cursor-pointer"
                        onClick={item.onClick || (() => {})}
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ${
                            item.status === 'preparation' ? 'opacity-50' : ''
                          }`}
                        />
                        {item.status === 'preparation' && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20">
                            <div className="bg-white/90 px-4 py-2 rounded-full flex items-center">
                              <Clock className="w-4 h-4 text-primary mr-2" />
                              <span className="text-sm font-medium text-gray-700">準備中</span>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="mt-4">
                        <h4 
                          className={`text-lg font-semibold group-hover:text-primary transition-colors ${
                            item.onClick ? 'cursor-pointer hover:underline' : ''
                          }`}
                          onClick={item.onClick || (() => {})}
                        >
                          {item.title}
                        </h4>
                        {item.status === 'available' && (
                          <div className="flex items-center text-primary mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="text-sm">詳しく見る</span>
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
