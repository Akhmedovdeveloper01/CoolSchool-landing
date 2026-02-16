import { Check } from "lucide-react";

const plans = [
  {
    name: "Стандарт",
    price: "350 000",
    duration: "в месяц",
    description: "Для тех, кто начинает свой путь",
    features: [
      "8 занятий в месяц",
      "Группа до 6 человек",
      "2 раза в неделю по 90 минут",
      "Доступ к материалам",
      "Чат с преподавателем"
    ],
    color: "#4ECDC4",
    popular: false
  },
  {
    name: "Интенсив",
    price: "600 000",
    duration: "в месяц",
    description: "Самый популярный выбор",
    features: [
      "12 занятий в месяц",
      "Группа до 6 и 8 человек",
      "3 раза в неделю по 90 минут",
      "Доступ к материалам",
      "Чат с преподавателем",
      "Дополнительные разговорные клубы"
    ],
    color: "#FF6B6B",
    popular: true
  },
  {
    name: "Индивидуальный",
    price: "250 000",
    duration: "за занятие",
    description: "Персональный подход",
    features: [
      "Гибкий график занятий",
      "Онлайн-видеоуроки",
      "60 минут занятие",
      "Персональная программа",
      "Доступ к материалам",
      "24/7 поддержка преподавателя"
    ],
    color: "#4ECDC4",
    popular: false
  }
];

export function Pricing() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Цены и тарифы
          </h2>
          <p className="text-xl text-gray-600">
            Выберите подходящий формат обучения
          </p>
        </div>

        <div className="flex gap-3">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-3xl overflow-hidden transition-all duration-300 ${plan.popular
                    ? "shadow-2xl scale-105 border-4 border-[#FF6B6B]"
                    : "shadow-lg hover:shadow-xl border-2 border-gray-100"
                  }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-[#FF6B6B] text-white px-6 py-2 rounded-bl-2xl font-semibold">
                    Популярный
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-6 min-h-[48px]">
                    {plan.description}
                  </p>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold" style={{ color: plan.color }}>
                        {plan.price}
                      </span>
                      <span className="text-gray-600">сум</span>
                    </div>
                    <p className="text-gray-500 mt-1">{plan.duration}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div
                          className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ backgroundColor: `${plan.color}20` }}
                        >
                          <Check className="w-4 h-4" style={{ color: plan.color }} />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className="w-full py-4 rounded-full font-semibold transition-all duration-200 hover:shadow-lg"
                    style={{
                      backgroundColor: plan.popular ? plan.color : "white",
                      color: plan.popular ? "white" : plan.color,
                      border: `2px solid ${plan.color}`
                    }}
                  >
                    Выбрать тариф
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
