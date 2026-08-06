import Nav from "./components/landing/Nav";
import Hero from "./components/landing/Hero";
import Marquee from "./components/landing/Marquee";
import Features from "./components/landing/Features";
import Steps from "./components/landing/Steps";
import Creators from "./components/landing/Creators";
import Pricing from "./components/landing/Pricing";
import Faq from "./components/landing/Faq";
import CtaFooter from "./components/landing/CtaFooter";

export default function Landing() {
  return (
    <div className="min-h-screen bg-cream">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Features />
        <Steps />
        <Creators />
        <Pricing />
        <Faq />
      </main>
      <CtaFooter />
    </div>
  );
}