import AboutUsScreen from '@/components/home/AboutUs';
import IntroScreen from '@/components/home/Intro';
import OnlineScreen from '@/components/home/Online';
import ServiceScreen from '@/components/home/Service';
import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout title="Home">
      <IntroScreen />
      <ServiceScreen />
      <OnlineScreen />
      <AboutUsScreen />
    </Layout>
  );
}
