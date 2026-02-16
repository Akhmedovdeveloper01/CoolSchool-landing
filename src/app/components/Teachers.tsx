import { ImageWithFallback } from "./figma/ImageWithFallback";
import { GraduationCap, Star } from "lucide-react";

const teachers = [
  {
    name: "Анна Петрова",
    role: "Старший преподаватель",
    experience: "12 лет опыта",
    photo: "https://cdn-main.infourok.ru/is00/0001/00a93688-9d8e4351.jpg",
    specialty: "Разговорная практика для начинающих"
  },
  {
    name: "Дмитрий Соколов",
    role: "Преподаватель",
    experience: "8 лет опыта",
    photo: "https://www.travelandteachrecruiting.com/wp-content/uploads/2015/07/ESL-teacher-1.jpg",
    specialty: "Бизнес-коммуникация на русском"
  },
  {
    name: "Елена Волкова",
    role: "Преподаватель",
    experience: "10 лет опыта",
    photo: "https://24.kg/files/media/321/321726.jpg",
    specialty: "Продвинутый разговорный уровень"
  }
];

export function Teachers() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Наши преподаватели
          </h2>
          <p className="text-xl text-gray-600">
            Опытные педагоги с сертификатами и любовью к своему делу
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map((teacher, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border-2 border-gray-100"
            >
              <div className="relative h-80 overflow-hidden">
                <ImageWithFallback
                  src={teacher.photo}
                  alt={teacher.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#FF6B6B] text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                  <Star className="w-4 h-4 fill-white" />
                  <span className="text-sm font-semibold">5.0</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {teacher.name}
                </h3>
                <p className="text-[#FF6B6B] font-medium mb-3">{teacher.role}</p>
                <div className="flex items-center gap-2 text-gray-600 mb-3">
                  <GraduationCap className="w-5 h-5 text-[#4ECDC4]" />
                  <span>{teacher.experience}</span>
                </div>
                <p className="text-gray-700 leading-relaxed bg-[#4ECDC4]/10 rounded-xl p-3">
                  {teacher.specialty}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
