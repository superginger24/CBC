import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import WhyItWorks from "@/components/WhyItWorks";
import Modules from "@/components/Modules";
import Takeaway from "@/components/Takeaway";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <WhoWeAre />
      <WhyItWorks />
      <Modules />
      <Takeaway />
      <Footer />
    </main>
  );
}
