import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import WhyUs from "@/components/WhyUs";
import HowToBuy from "@/components/HowToBuy";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Projects />
      <WhyUs />
      <HowToBuy />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
