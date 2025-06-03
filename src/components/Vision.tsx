import React from 'react';
import { useInView } from 'react-intersection-observer';

const Vision = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="vision" className="section-padding bg-white">
      <div className="max-w-4xl mx-auto">
        <div
          ref={ref}
          className={`space-y-16 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } transition-all duration-1000 ease-out`}
        >
          {/* Vision Section */}
          <div>
            <h2 className="text-4xl font-bold mb-8 text-center">ビジョン</h2>
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
              <h3 className="text-3xl font-bold mb-6 text-primary text-center">AIの恩恵を、すべての人へ</h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-8">
                私たちは、急速に発展する生成AIの力を、年齢や企業規模、業種を問わず、すべての人が活用できる社会を目指しています。技術の恩恵は一部の人だけのものであってはならない—この信念のもと、AIを活用した新しい価値創造と社会課題の解決に取り組んでいます。
              </p>
              <p className="text-xl italic text-gray-600 text-center">
                デジタル世界の新たな「種（seed）」を一つひとつ蒔き、共に成長していく。それがUniseedの願いです。
              </p>
            </div>
          </div>

          {/* Story Section */}
          <div>
            <h2 className="text-4xl font-bold mb-8 text-center">ストーリー</h2>
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg space-y-8">
              {/* Innovation Section */}
              <div>
                <h4 className="text-xl font-semibold mb-4 text-primary">技術革新がもたらす可能性と懸念</h4>
                <p className="text-gray-700 leading-relaxed">
                  2022年末、ChatGPTの登場によって世界は一変しました。「調べる」から「相談する」へ、さらには「能動的にアドバイスを受ける」世界へと、私たちの労働環境や情報との関わり方が急速に変化しています。
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  大企業ではこうした変化への対応が進む一方で、中小企業や個人事業主、特に50代以上の方々がAI技術から取り残されつつある現状を目の当たりにしてきました。かつてインターネットやスマートフォンの普及時に生まれた情報格差以上に、生成AIによる分断は社会に大きな影響を与える可能性があります。
                </p>
              </div>

              {/* Mission Section */}
              <div>
                <h4 className="text-xl font-semibold mb-4 text-primary">取り残されない社会を目指して</h4>
                <p className="text-gray-700 leading-relaxed italic mb-4">
                  「このままでは、AIを使いこなせる人と使いこなせない人の間に、さらに大きな格差が生まれてしまう」
                </p>
                <p className="text-gray-700 leading-relaxed">
                  この危機感が、Uniseedを立ち上げる原動力となりました。これまで大企業で培ってきた経験とノウハウを活かし、AI革命の波に乗り遅れる人が一人でも少なくなるよう、橋渡し役を担っていきたいと考えています。
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  技術の複雑さを理解し、それをシンプルに伝える。難しいものを簡単に、誰もが使えるようにする。それが私たちの使命です。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
