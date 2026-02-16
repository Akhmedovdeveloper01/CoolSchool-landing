import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-white to-[#4ECDC4]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Говори по-русски свободно и без страха!
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 mb-8">
              Разговорные курсы для взрослых в Ташкенте
            </p>
            <a href="#contact">
              <button className="bg-[#FF6B6B] hover:bg-[#ff5252] text-white px-10 py-5 rounded-full text-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                Бесплатный пробный урок
              </button>
            </a>
          </div>

          {/* Right column - Hero image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://imageio.forbes.com/specials-images/imageserve/664bae976149fc0a17099a12/0x0.jpg?format=jpg&amp;height=900&amp;width=1600&amp;fit=bounds"
                alt="Happy group conversation"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#FF6B6B] rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#4ECDC4] rounded-full opacity-20 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
