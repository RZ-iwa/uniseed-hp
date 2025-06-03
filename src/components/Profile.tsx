import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Building2, User, Calendar, MapPin, Mail, Briefcase } from 'lucide-react';

const CompanyInfo = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const companyDetails = [
    { icon: Building2, label: '屋号', value: 'Uniseed（ユニシード）' },
    { icon: User, label: '代表', value: '岩﨑 良嗣' },
    { icon: Calendar, label: '創業', value: '2025年3月' },
    { icon: MapPin, label: '所在地', value: '東京都品川区' },
    { icon: Mail, label: '連絡先', value: 'uniseed.iy@gmail.com' },
    { icon: Briefcase, label: '事業内容', value: 'AIツール開発、EC事業、教育関連サービス' },
  ];

  return (
    <section id="company" className="section-padding bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">会社概要</h2>
        
        <div
          ref={ref}
          className={`bg-white rounded-2xl shadow-lg overflow-hidden ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } transition-all duration-1000 ease-out`}
        >
          <div className="divide-y divide-gray-100">
            {companyDetails.map((detail, index) => (
              <div
                key={index}
                className="flex items-start p-6 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                  <detail.icon className="text-primary w-6 h-6" />
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {detail.label}
                  </h3>
                  <p className="text-gray-600">{detail.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;
