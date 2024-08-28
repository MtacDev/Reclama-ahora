import siteConfig from '@/lib/config/site';
import Link from 'next/link';
import { Logos } from '@/components/logos';
import './MainLogo.scss'

export const MainLogoText = () => {
  return (
    <Link href="/" className="items-center space-x-2 md:flex">
      <img src={Logos.HomeLogo.src} alt="" sizes="small" className='home-logo' />
      <span className="font-bold hidden md:inline-block">{siteConfig.alt_name}</span>
    </Link>
  );
};

export const MainLogoIcon = () => {
  return (
    <Link href="/" className="w-4 h-4">
      <img src={Logos.HomeLogo.src} alt="" sizes="small"  />
    </Link>
  );
};
