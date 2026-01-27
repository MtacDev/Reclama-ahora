import Hero from './_PageSections/Hero';
import DataListSection from './_PageSections/DataList';
import Feature from './_PageSections/Feature';
import LogoCloud from './_PageSections/LogoCloud';
import CTA from './_PageSections/CTA';

export default function Landing() {
  return (
    <div>
      <Hero />
      <LogoCloud />
      <DataListSection />
      <Feature />
      <CTA />
    </div>
  );
}
