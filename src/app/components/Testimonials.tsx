import { useEffect, useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "./ui/carousel";

const testimonials = [
  {
    name: "Шахло Рахимова",
    role: "Менеджер по продажам",
    text: "За 3 месяца я перестала бояться говорить по-русски! Теперь свободно общаюсь с клиентами и коллегами. Спасибо преподавателям за терпение и поддержку!",
    rating: 5
  },
  {
    name: "Бехруз Каримов",
    role: "IT-специалист",
    text: "Отличная школа! Небольшие группы, дружелюбная атмосфера, современные методы обучения. Рекомендую всем, кто хочет улучшить разговорный русский.",
    rating: 5
  },
  {
    name: "Дилноза Турсунова",
    role: "Студентка",
    text: "Пробное занятие меня просто покорило! Никакой зубрежки и скучной грамматики - только живое общение. После двух месяцев занятий говорю намного увереннее.",
    rating: 5
  },
  {
    name: "Анвар Усманов",
    role: "Предприниматель",
    text: "Искал курсы с гибким графиком - нашел здесь. Занятия проходят в удобное время, преподаватели профессиональные. Результат виден уже через месяц!",
    rating: 5
  }
];

export function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="py-20 bg-gradient-to-br from-[#FF6B6B]/5 to-[#4ECDC4]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Отзывы наших студентов
          </h2>
          <p className="text-xl text-gray-600">
            Узнайте, что говорят те, кто уже достиг успеха с нами
          </p>
        </div>

        <div className="relative px-12">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white rounded-3xl p-8 shadow-lg h-full border-2 border-gray-100 hover:border-[#4ECDC4] transition-colors duration-300">
                    <Quote className="w-12 h-12 text-[#FF6B6B] mb-4 opacity-50" />
                    <p className="text-gray-700 leading-relaxed mb-6 min-h-[120px]">
                      {testimonial.text}
                    </p>
                    <div className="flex items-center gap-2 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 fill-[#FF6B6B]"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-[#4ECDC4] font-medium">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Custom navigation buttons */}
            <button
              onClick={() => api?.scrollPrev()}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white hover:bg-[#FF6B6B] text-gray-800 hover:text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-colors duration-200 z-10 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => api?.scrollNext()}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white hover:bg-[#FF6B6B] text-gray-800 hover:text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-colors duration-200 z-10 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </Carousel>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  current === index
                    ? "bg-[#FF6B6B] w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
