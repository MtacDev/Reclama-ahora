import { Button } from '@/components/ui/Button';
import './hero.scss'
import { Input } from '@/components/ui/Input';

export default function Hero() {
  return (
    <div className='hero-section'>
      <section className="py-18 px-4">
        <div className="flex flex-col items-center gap-4 text-center" >
         <div className="bg-black bg-opacity-80">
          <div className='py-8'>
              <h1 className="text-3xl md:text-7xl md:max-w-[54rem] text-white" >
                Reclama Ahora! Tus derechos
              </h1>
              <div className="resume-text"> 
                <h4 className="max-w-[42rem] sm:text-xm sm:leading-6 resume-text text-white">
                Los derechos del consumidor en Chile garantizan protección, información, seguridad en productos y servicios, y la posibilidad de reclamar y exigir reparaciones.
                </h4>
              </div>
              
              
            </div>
          </div>
          <div className="mt-6 sm:flex max-w-[42rem] ">
                <Input
                className="w-96 h-12 p-2"
                  type="text"
                  name="company-search"
                  autoComplete="email"
                  placeholder="Busca la Empresa, Servicio o Producto"
                />
                <div className="ml-4">
                  <Button variant="secondary" type="submit" className="h-12">
                    Empezar Reclamo
                  </Button>
                </div>
              </div>
        </div>
      </section>
    </div>
  );
}
