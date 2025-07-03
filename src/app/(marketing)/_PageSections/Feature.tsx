import { Search, FileText, MessageSquare, CheckCircle2, Shield, Clock } from 'lucide-react';
import Image from 'next/image';
import DashPic from '../../../../public/static/images/dash.png';

const claimSteps = [
  {
    step: '1',
    name: 'Busca la Empresa',
    description: 'Encuentra la empresa, tienda o servicio con el que tuviste el problema usando nuestro buscador inteligente.',
    icon: Search,
    color: 'text-blue-500'
  },
  {
    step: '2', 
    name: 'Completa tu Reclamo',
    description: 'Llena un formulario simple con los detalles de tu problema. Te guiamos paso a paso.',
    icon: FileText,
    color: 'text-green-500'
  },
  {
    step: '3',
    name: 'Envío Automático',
    description: 'Enviamos tu reclamo directamente a la empresa y a los organismos competentes.',
    icon: MessageSquare,
    color: 'text-purple-500'
  },
  {
    step: '4',
    name: 'Seguimiento y Resolución',
    description: 'Recibe actualizaciones del estado de tu reclamo y obtén la resolución que mereces.',
    icon: CheckCircle2,
    color: 'text-orange-500'
  }
];

const benefits = [
  {
    name: 'Proceso Seguro y Confidencial',
    description: 'Tus datos están protegidos con encriptación de grado militar. Tu privacidad es nuestra prioridad.',
    icon: Shield,
    color: 'text-green-500'
  },
  {
    name: 'Respuesta Rápida',
    description: 'Las empresas tienen máximo 15 días para responder tu reclamo según la ley chilena.',
    icon: Clock,
    color: 'text-blue-500'
  }
];

interface FeaturePropsI {
  isFlipped?: boolean;
}

const ClaimProcessSection = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Cómo Funciona Nuestro Proceso de Reclamos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un proceso simple y efectivo para hacer valer tus derechos como consumidor
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {claimSteps.map((step, index) => (
            <div key={step.name} className="relative">
              {/* Connector line */}
              {index < claimSteps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-transparent z-0"></div>
              )}
              
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative z-10 border border-gray-100">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 mb-4">
                  <step.icon className={`w-6 h-6 ${step.color}`} />
                </div>
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.name} className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md">
              <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r from-gray-50 to-gray-100 flex items-center justify-center`}>
                <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.name}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const WhyChooseUsSection = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              ¿Por qué elegir Reclama Ahora?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Somos la plataforma líder en Chile para resolver conflictos de consumo. 
              Nuestro equipo de expertos te acompaña en todo el proceso para garantizar 
              que obtengas la mejor resolución posible.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Expertise Legal</h4>
                  <p className="text-gray-600">Conocemos la ley chilena de protección al consumidor al detalle</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Red de Contactos</h4>
                  <p className="text-gray-600">Tenemos relación directa con SERNAC y las principales empresas</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Historial Exitoso</h4>
                  <p className="text-gray-600">92% de nuestros reclamos obtienen una respuesta favorable</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Estadísticas de Éxito</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Reclamos Resueltos</span>
                  <span className="text-2xl font-bold">92%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-white h-2 rounded-full" style={{width: '92%'}}></div>
                </div>
                
                <div className="flex justify-between items-center mt-6">
                  <span>Tiempo Promedio</span>
                  <span className="text-2xl font-bold">7 días</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-white h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
                
                <div className="flex justify-between items-center mt-6">
                  <span>Satisfacción</span>
                  <span className="text-2xl font-bold">4.8/5</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-white h-2 rounded-full" style={{width: '96%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Feature({ isFlipped }: FeaturePropsI) {
  return (
    <div className="mt-8">
      <ClaimProcessSection />
      <WhyChooseUsSection />
    </div>
  );
}
