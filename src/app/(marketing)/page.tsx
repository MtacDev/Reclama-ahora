import Hero from './_PageSections/Hero';
import ThreeGraps from './_PageSections/DataList';
import Feature from './_PageSections/Feature';
import LogoCloud from './_PageSections/LogoCloud';
import CTA from './_PageSections/CTA';

export default function Landing() {
  return (
    <div>
      <Hero />
      <LogoCloud />
      <ThreeGraps />
      <Feature />
      <CTA />
    </div>
  );
}
