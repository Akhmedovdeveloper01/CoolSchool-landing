import { Phone, Calendar, Rocket } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "Свяжитесь с нами",
    description: "Позвоните или оставьте заявку на сайте. Мы ответим в течение часа и проведем бесплатную консультацию",
    color: "#FF6B6B"
  },
  {
    icon: Calendar,
    title: "Пройдите пробное занятие",
    description: "Познакомьтесь с преподавателем, оцените методику и атмосферу. Это абсолютно бесплатно!",
    color: "#4ECDC4"
  },
  {
    icon: Rocket,
    title: "Начните говорить!",
    description: "Присоединяйтесь к группе и начните практиковать русский язык в комфортной обстановке",
    color: "#FF6B6B"
  }
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#4ECDC4]/5 to-[#FF6B6B]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Как проходят занятия?
          </h2>
          <p className="text-xl text-gray-600">
            Три простых шага до свободного владения русским языком
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full">
                  <div className="flex flex-col items-center text-center">
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-md"
                      style={{ backgroundColor: step.color }}
                    >
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div
                      className="text-6xl font-bold mb-4 opacity-10"
                      style={{ color: step.color }}
                    >
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                {/* Arrow connector for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 text-[#4ECDC4] text-4xl">
                    →
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
