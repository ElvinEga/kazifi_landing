import CookiePolicyDialog from "@/components/CookiePolicyDialog";
import AboutSection from "@/components/about";
import AdaptacsSection from "@/components/adaptacs";
import ClientsSection from "@/components/clients";
import ContactSection from "@/components/contactus";
import FeaturesSection from "@/components/features";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero";
import Navbar from "@/components/navbar";
import ProductSection from "@/components/products";
import TeamSection from "@/components/team";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kazifi - Turbocharge Your Job Search</title>
        <meta name="Kazifi" content="AI Job Search" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <HeroSection />
      <ClientsSection />
      <AboutSection />
      <ProductSection />
      <FeaturesSection />
      <AdaptacsSection />
      <TeamSection />
      {/* <ContactSection /> */}
      <CookiePolicyDialog />
      <FooterSection />
    </>
  );
}
