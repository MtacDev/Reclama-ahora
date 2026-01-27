import { buttonVariants } from '@/components/ui/Button';
import Link from 'next/link';
import { cn } from '@/lib/utils/helpers';
import { ArrowRight, Shield, Clock, CheckCircle2, Zap } from 'lucide-react';

export default function CTA() {
  return (
    <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-purple-600/50"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-white/10"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-white/10"></div>
      
      <div className="relative px-6 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Urgency indicator */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Zap className="w-4 h-4 text-yellow-300" />
            <span>¡No esperes más! Cada día cuenta para tu reclamo</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            ¿Listo para Reclamar
            <br />
            <span className="text-yellow-300">Tus Derechos?</span>
          </h2>
          
          <p className="mx-auto mt-6 max-w-2xl text-xl leading-8 text-white/90">
            No dejes que las empresas se aprovechen de ti. Únete a miles de chilenos que ya han 
            recuperado su dinero y obtenido la justicia que merecían.
          </p>

          {/* Benefits highlight */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 mb-12">
            <div className="flex items-center justify-center space-x-2 text-white">
              <Shield className="w-6 h-6 text-green-300" />
              <span className="font-medium">100% Gratuito</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-white">
              <Clock className="w-6 h-6 text-blue-300" />
              <span className="font-medium">Proceso Rápido</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-white">
              <CheckCircle2 className="w-6 h-6 text-yellow-300" />
              <span className="font-medium">92% Éxito</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Link 
              href="/dashboard/todos/create" 
              className={cn(
                buttonVariants({ size: 'lg' }), 
                "bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4 h-auto font-bold shadow-xl hover:shadow-2xl transition-all duration-200 flex items-center gap-2"
              )}
            >
              Hacer Mi Reclamo Ahora
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <Link
              href="/auth/signup"
              className={cn(
                buttonVariants({ variant: 'ghost', size: 'lg' }), 
                "text-white border-2 border-white/30 hover:bg-white/10 text-lg px-8 py-4 h-auto font-semibold transition-all duration-200"
              )}
            >
              Ver Ejemplos de Casos
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 text-center">
            <p className="text-white/80 text-sm mb-4">
              Más de 25,000 chilenos ya confían en nosotros
            </p>
            <div className="flex items-center justify-center space-x-8 text-white/60">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">50K+</div>
                <div className="text-xs">Casos Exitosos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">7 días</div>
                <div className="text-xs">Tiempo Promedio</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">4.8★</div>
                <div className="text-xs">Valoración</div>
              </div>
            </div>
          </div>

          {/* Guarantee */}
          <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <h4 className="text-white font-semibold text-lg mb-2">
              🛡️ Garantía de Satisfacción
            </h4>
            <p className="text-white/80 text-sm">
              Si no obtienes respuesta en 15 días, te ayudamos a escalar tu caso al SERNAC completamente gratis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
