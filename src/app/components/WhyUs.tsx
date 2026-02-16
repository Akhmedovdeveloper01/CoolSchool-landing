import { MessageCircle, Users, Clock, Award } from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    title: "100% разговорная практика",
    description: "Больше говорите, меньше учебников. Настоящие диалоги с первого занятия",
    color: "#FF6B6B"
  },
  {
    icon: Users,
    title: "Малые группы до 6, 8 человек",
    description: "Каждый получает достаточно времени для практики и внимания преподавателя",
    color: "#4ECDC4"
  },
  {
    icon: Clock,
    title: "Гибкий график",
    description: "Утренние, дневные и вечерние группы. Выбирайте удобное время",
    color: "#FF6B6B"
  },
  {
    icon: Award,
    title: "Результат за 2 месяца",
    description: "Заметные изменения в вашей беглости и уверенности уже через 8 недель",
    color: "#4ECDC4"
  }
];

export function WhyUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Почему именно мы?
          </h2>
          <p className="text-xl text-gray-600">
            Мы создали идеальную среду для изучения разговорного русского языка
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white border-2 border-gray-100 rounded-3xl p-8 hover:shadow-xl transition-shadow duration-300 group"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: `${feature.color}20` }}
                >
                  <Icon className="w-8 h-8" style={{ color: feature.color }} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
