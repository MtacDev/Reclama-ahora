import { Building2, Smartphone, CreditCard, Truck, Car, Shield } from 'lucide-react';

const companies = [
  {
    name: 'Retail',
    icon: Building2,
    description: 'Tiendas y Comercio'
  },
  {
    name: 'Telecom',
    icon: Smartphone,
    description: 'Telecomunicaciones'
  },
  {
    name: 'Bancos',
    icon: CreditCard,
    description: 'Servicios Financieros'
  },
  {
    name: 'Delivery',
    icon: Truck,
    description: 'Envíos y Delivery'
  },
  {
    name: 'Transporte',
    icon: Car,
    description: 'Transporte Público'
  },
  {
    name: 'Seguros',
    icon: Shield,
    description: 'Compañías de Seguros'
  }
];

export default function LogoCloud() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Reclama en Cualquier Industria
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ayudamos a resolver conflictos con empresas de todos los sectores en Chile
          </p>
        </div>
        
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
            {companies.map((company, index) => (
              <div 
                key={company.name}
                className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 group cursor-pointer"
              >
                <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl mb-3 group-hover:from-blue-100 group-hover:to-purple-100 transition-colors">
                  <company.icon className="w-6 h-6 md:w-7 md:h-7 text-blue-600 group-hover:text-purple-600 transition-colors" />
                </div>
                <h3 className="text-sm md:text-base font-semibold text-gray-900 text-center mb-1">
                  {company.name}
                </h3>
                <p className="text-xs text-gray-500 text-center leading-tight">
                  {company.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust message */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
            <Shield className="w-4 h-4" />
            <span>Respaldado por la Ley 19.496 de Protección al Consumidor</span>
          </div>
        </div>
      </div>
    </div>
  );
}
