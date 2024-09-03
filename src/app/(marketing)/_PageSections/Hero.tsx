import { cn } from '@/lib/utils/helpers';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/Button';
import './hero.scss'

export default function Hero() {
  return (
    <div className='hero-section'>
      <section className="py-18 px-4">
        <div className="flex flex-col items-center gap-4 text-center" >
         <div className="title-style">
          <div className='py-8'>
              <h1 className=" text-3xl md:text-7xl md:max-w-[54rem] " >
                Reclama Ahora! Tus derechos
              </h1>
              <div className="resume-text"> 
                <h4 className="max-w-[42rem] sm:text-xm sm:leading-6 resume-text">
                Los derechos del consumidor en Chile garantizan protección, información, seguridad en productos y servicios, y la posibilidad de reclamar y exigir reparaciones.
                </h4>
              </div>
              
              <div className="space-x-4">
                <Link href="/login" className={cn(buttonVariants({ size: 'lg' }))}>
                  Get Started
                </Link>  
                <Link
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                  className={cn(buttonVariants({ variant: 'ghost', size: 'lg' }))}
                >
                  Learn More <span aria-hidden="true">→</span>
                </Link>
            </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
