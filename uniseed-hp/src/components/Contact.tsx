import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  setIsSubmitting(true);
  setSubmitStatus({});
  
  try {
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbyrxkaHWK9q0zoScuTYQBjogsxP65_ZJtTjPorNsjQWnn7M59W115I4ZcAGq6gue3HKIg/exec';
    
    // URLSearchParamsを使用
    const formDataUrlEncoded = new URLSearchParams();
    Object.entries(formData).forEach(([key, value]) => {
      formDataUrlEncoded.append(key, value);
    });
    
    const response = await fetch(scriptUrl, {
      method: 'POST',
      mode: 'no-cors', // CORSエラー回避のため追加
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formDataUrlEncoded.toString(), // 明示的に文字列に変換
    });
    
    // mode: 'no-cors'を使用すると、responseの中身にアクセスできないため
    // 送信成功と見なす
    setSubmitStatus({
      success: true,
      message: 'お問い合わせを受け付けました。確認メールをお送りしましたのでご確認ください。'
    });
    
    // フォームをリセット
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  } catch (error) {
    console.error('送信エラー:', error);
    setSubmitStatus({
      success: false,
      message: '通信エラーが発生しました。インターネット接続をご確認ください。'
    });
  } finally {
    setIsSubmitting(false);
  }
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="section-title">お問い合わせ</h2>
        <p className="text-center text-gray-600 text-lg mb-12">
          UniseedのサービスやAI活用についてのご質問、お見積もり依頼など、お気軽にお問い合わせください。
        </p>
        
        <div
          ref={ref}
          className={`${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } transition-all duration-1000 ease-out`}
        >
          {submitStatus.success ? (
            <div className="bg-green-50 p-8 rounded-2xl shadow-lg text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-green-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <h3 className="text-xl font-bold text-green-800 mb-2">送信完了</h3>
              <p className="text-green-700">{submitStatus.message}</p>
              <button 
                onClick={() => setSubmitStatus({})} 
                className="mt-6 bg-white hover:bg-gray-100 text-green-700 font-semibold py-2 px-4 border border-green-500 rounded-lg transition-colors duration-200"
              >
                新しいお問い合わせを作成
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-8 rounded-2xl shadow-lg">
              {submitStatus.message && !submitStatus.success && (
                <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4 rounded">
                  <p className="text-red-700">{submitStatus.message}</p>
                </div>
              )}
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  お名前<span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  メールアドレス<span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  電話番号<span className="text-gray-500 text-xs ml-2">（任意）</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  お問い合わせ内容<span className="text-red-500 ml-1">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <button
                type="submit"
                className={`w-full ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-primary hover:bg-primary-dark'
                } text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    送信中...
                  </span>
                ) : (
                  '送信する'
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
