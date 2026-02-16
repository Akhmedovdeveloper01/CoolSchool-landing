import { Hero } from "./components/Hero";
import { WhyUs } from "./components/WhyUs";
import { HowItWorks } from "./components/HowItWorks";
import { Teachers } from "./components/Teachers";
import { Testimonials } from "./components/Testimonials";
import { Pricing } from "./components/Pricing";
import { ContactForm } from "./components/ContactForm";
import { Header } from "./components/Header";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <WhyUs />
      <HowItWorks />
      <Teachers />
      <Testimonials />
      <Pricing />
      <ContactForm />
    </div>
  );
}
