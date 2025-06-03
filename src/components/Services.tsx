import React from 'react';
import { useInView } from 'react-intersection-observer';
import { BrainCircuit, GraduationCap, ShoppingBag } from 'lucide-react';

const services = [
  {
    icon: BrainCircuit,
    title: 'AIツール開発',
    description: 'お客様の細かなニーズに対応したAIツールを継続的に開発。使いやすさと実用性を兼ね備えた、専門知識がなくても活用できるソリューションを提供します。',
    features: [
      '文書要約・議事録作成ツール',
      'AI搭載カスタマーサポートボット',
      '業種別特化型AI分析ツール',
      '個人向けAIパーソナルアシスタント'
    ]
  },
  {
    icon: ShoppingBag,
    title: 'EC事業',
    description: 'AIで発掘する「あったらいいな」商品。Amazon等のECプラットフォームを活用し、AIによるトレンド分析と顧客ニーズの発掘から生まれた商品を提供しています。',
    features: [
      '関連事業「アロマフォルマ」と連携したヘルスケア商品',
      '日常の小さな不便を解決する生活雑貨',
      'AIが提案するパーソナライズ商品',
      '海外の先進的アイデア商品の日本向けローカライズ'
    ]
  },
  {
    icon: GraduationCap,
    title: '教育事業',
    description: '受験や学習に全力で向き合うご家庭をサポートする教育サービスを提供',
    features: [
      {
        text: '学校説明会キャンセル通知サービス',
        onClick: () => window.open('https://mirai-compass.uniseed.life/', '_blank')
      },
      'AI活用学習サポートプログラム',
      '忘却曲線対応型個別最適学習コンテンツ開発'
    ]
  }
];

const Services = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">事業内容</h2>
        <p className="text-center text-lg text-gray-600 mb-12">
          生成AI技術を核として、以下の3つの事業を展開しています
        </p>
        
        <div
          ref={ref}
          className={`grid lg:grid-cols-3 gap-8 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } transition-all duration-1000 ease-out`}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
                  <service.icon className="text-primary w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      {typeof feature === 'string' ? (
                        feature
                      ) : (
                        <button 
                          onClick={feature.onClick}
                          className="hover:underline hover:text-primary cursor-pointer"
                        >
                          {feature.text}
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
