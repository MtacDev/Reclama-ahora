import { Header } from './_PageSections/Header';
import { LayoutProps } from '@/lib/types/types';
import Footer from '@/components/Footer';

export default async function MarketingLayout({ children }: LayoutProps) {
  return (
    <div>
      <Header />
      <main className=" items-center justify-center">{children}</main>
      <Footer />
    </div>
  );
}
