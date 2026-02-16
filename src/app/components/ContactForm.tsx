import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Спасибо! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#4ECDC4]/10 to-[#FF6B6B]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Записаться на бесплатный урок
          </h2>
          <p className="text-xl text-gray-600">
            Оставьте заявку и мы свяжемся с вами в течение часа
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Ваше имя *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#4ECDC4] focus:outline-none transition-colors"
                  placeholder="Введите ваше имя"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2">
                  Телефон *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#4ECDC4] focus:outline-none transition-colors"
                  placeholder="+998 90 123 45 67"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#4ECDC4] focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#4ECDC4] focus:outline-none transition-colors resize-none"
                  placeholder="Расскажите о вашем уровне и целях..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#FF6B6B] hover:bg-[#ff5252] text-white py-4 rounded-full font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <Send className="w-5 h-5" />
                Отправить заявку
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100 hover:border-[#4ECDC4] transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#FF6B6B]/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-7 h-7 text-[#FF6B6B]" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">
                    Телефон
                  </h3>
                  <p className="text-gray-700 text-lg">
                    <a href="tel:+998977775046">+998 97 777 50 46</a>
                  </p>

                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100 hover:border-[#4ECDC4] transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#4ECDC4]/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-7 h-7 text-[#4ECDC4]" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">
                    Email
                  </h3>
                  <p className="text-gray-700 text-lg">
                    <a href="mailto:dzhamolov98@inbox.ru">dzhamolov98@inbox.ru</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100 hover:border-[#4ECDC4] transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#FF6B6B]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-7 h-7 text-[#FF6B6B]" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">
                    Адрес
                  </h3>
                  <a href="https://maps.app.goo.gl/vVwiBDLY2DVP46Eb9" target="_blank"> <p className="text-gray-700 text-lg">
                    г. Ташкент, Юнусабадский район,
                    <br />
                    ул. Амира Темура
                  </p></a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#FF6B6B] to-[#4ECDC4] rounded-3xl p-8 shadow-xl text-white">
              <h3 className="text-2xl font-bold mb-4">
                Приходите к нам!
              </h3>
              <p className="text-lg leading-relaxed">
                Мы работаем ежедневно с 9:00 до 21:00. Приходите на бесплатную консультацию и познакомьтесь с нашими преподавателями лично!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t-2 border-gray-200">
        <div className="text-center text-gray-600">
          <p className="text-lg">
            © 2026 Razgovorniy Rus Tili. Все права защищены.
          </p>
          <p className="mt-2">
            Языковая школа в Ташкенте, Узбекистан
          </p>
        </div>
      </div>
    </section>
  );
}
