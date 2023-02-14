import AboutUsScreen from '@/components/home/AboutUs';
import IntroScreen from '@/components/home/Intro';
import OnlineScreen from '@/components/home/Online';
import ProductsScreen from '@/components/home/Products';
import ServiceScreen from '@/components/home/Service';
import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout title="Home">
      <IntroScreen />
      <ServiceScreen />
      <OnlineScreen />
      <ProductsScreen />
      <AboutUsScreen />
    </Layout>
  );
}
