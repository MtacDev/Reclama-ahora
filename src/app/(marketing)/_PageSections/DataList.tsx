import { TrendingUp, Users, Award, Star, Quote } from 'lucide-react';

const statistics = [
  {
    id: 1,
    title: 'Reclamos Exitosos',
    value: '50,000+',
    description: 'Casos resueltos favorablemente',
    icon: Award,
    color: 'from-green-500 to-emerald-600',
    textColor: 'text-green-600'
  },
  {
    id: 2,
    title: 'Usuarios Satisfechos',
    value: '25,000+',
    description: 'Chilenos nos han confiado sus reclamos',
    icon: Users,
    color: 'from-blue-500 to-cyan-600',
    textColor: 'text-blue-600'
  },
  {
    id: 3,
    title: 'Tasa de Éxito',
    value: '92%',
    description: 'De efectividad en resolución de casos',
    icon: TrendingUp,
    color: 'from-purple-500 to-pink-600',
    textColor: 'text-purple-600'
  },
];

const testimonials = [
  {
    name: 'María González',
    location: 'Santiago',
    rating: 5,
    text: 'Increíble servicio. Logré que me devolvieran el dinero de un producto defectuoso en solo 5 días. Totalmente recomendado.',
    category: 'Retail'
  },
  {
    name: 'Carlos Rodríguez',
    location: 'Valparaíso',
    rating: 5,
    text: 'Mi problema con la empresa telefónica se resolvió rápidamente gracias a Reclama Ahora. Excelente plataforma.',
    category: 'Telecomunicaciones'
  },
  {
    name: 'Ana Martínez',
    location: 'Concepción',
    rating: 5,
    text: 'Proceso muy fácil y transparente. Me mantuvieron informada en todo momento hasta resolver mi caso.',
    category: 'Servicios Financieros'
  }
];

export default function DataListSection() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Statistics Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Resultados que Hablan por Sí Solos
          </h2>
          <p className="text-xl text-gray-600">
            Miles de chilenos ya han confiado en nosotros para resolver sus reclamos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {statistics.map((stat) => (
            <div
              key={stat.id}
              className="relative overflow-hidden bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5`}></div>
              <div className="relative p-8 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${stat.color} mb-6`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className={`text-4xl font-bold ${stat.textColor} mb-2`}>
                  {stat.value}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {stat.title}
                </h3>
                <p className="text-gray-600">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Lo que Dicen Nuestros Usuarios
            </h3>
            <p className="text-lg text-gray-600">
              Experiencias reales de personas que han usado nuestra plataforma
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    {testimonial.category}
                  </span>
                </div>

                <div className="relative mb-4">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-gray-200" />
                  <p className="text-gray-700 italic pl-6">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
