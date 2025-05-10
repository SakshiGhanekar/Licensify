import HeroSection from "@/components/hero-section"
import FooterSection from "@/components/footer-section"
import HowItWorksSection from "@/components/how-it-works-section"
import TestimonialsSection from "@/components/testimonials-section"
import WhyChooseUsSection from "@/components/why-choose-us-section"
import ContactFormSection from "@/components/contact-form-section"
import Navbar from "@/components/navbar"
export default function Home(){
  return(
    <>
    <Navbar/>
    <HeroSection/>
    <HowItWorksSection/>
    <WhyChooseUsSection/>
    <TestimonialsSection/>
    <ContactFormSection/>
    <FooterSection/>
    </>
  )
}