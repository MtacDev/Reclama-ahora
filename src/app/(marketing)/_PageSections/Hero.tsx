import { Button } from '@/components/ui/Button';
import './hero.scss'
import { Input } from '@/components/ui/Input';
import { ShieldCheck, Users, Award, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className='hero-section'>
      <section className="w-full h-full flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto w-full">
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-8">
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <ShieldCheck className="w-5 h-5 text-green-400" />
              <span>100% Seguro</span>
            </div>
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <Users className="w-5 h-5 text-blue-400" />
              <span>+50,000 Reclamos Exitosos</span>
            </div>
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <Award className="w-5 h-5 text-yellow-400" />
              <span>Respuesta Garantizada</span>
            </div>
          </div>

          <div className="text-center space-y-6">
            {/* Main headline */}
            <div className="bg-gradient-to-r from-black/90 to-black/70 backdrop-blur-sm rounded-3xl p-6 md:p-12 shadow-2xl mx-auto">
              <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                ¿Tuviste un <span className="text-gradient bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Problema</span> con un Producto?
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-white/90 mt-4 md:mt-6 max-w-3xl mx-auto leading-relaxed">
                Reclama tus derechos de forma <strong>rápida, fácil y gratuita</strong>. 
                Te ayudamos a resolver conflictos con empresas y obtener la compensación que mereces.
              </p>
            </div>
            
            {/* Search and CTA */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 md:p-8 shadow-xl max-w-4xl mx-auto">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                Comienza tu Reclamo en 3 Minutos
              </h3>
              <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
                <div className="flex-1 w-full max-w-lg">
                  <Input
                    className="w-full h-12 md:h-14 text-base md:text-lg px-4 md:px-6 border-2 border-gray-200 focus:border-blue-500 rounded-xl"
                    type="text"
                    name="company-search"
                    placeholder="🔍 Busca la empresa, tienda o servicio..."
                  />
                </div>
                <Button 
                  variant="default" 
                  size="lg"
                  className="h-12 md:h-14 px-6 md:px-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg transition-all duration-200 flex items-center gap-2 w-full md:w-auto"
                >
                  Hacer Reclamo
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
              <p className="text-sm text-gray-600 mt-3 text-center">
                ✅ Sin costo • ✅ Sin registro • ✅ Resultados en 24-48 horas
              </p>
            </div>

            {/* Popular categories */}
            <div className="mt-6 md:mt-8">
              <p className="text-white/80 text-sm mb-4">Categorías más reclamadas:</p>
              <div className="flex flex-wrap justify-center gap-2 md:gap-3 max-w-4xl mx-auto">
                {[
                  'Retail/Tiendas',
                  'Telecomunicaciones', 
                  'Bancos',
                  'Delivery/Reparto',
                  'Transporte',
                  'Seguros'
                ].map((category) => (
                  <button
                    key={category}
                    className="bg-white/20 backdrop-blur-sm text-white px-3 md:px-4 py-2 rounded-full text-xs md:text-sm hover:bg-white/30 transition-colors"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
