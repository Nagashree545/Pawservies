import BookingCta from "./Bookingcat";
import FAQ from "./FAQ";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import ServiceHighlights from "./Serviceshighlits";
import Testimonials from "./Testimonial";
import WhyChooseUs from "./Whychooseus";

export default function Homepage(){
    return(
        <>
        <div className="layout">
    
      <Hero/>
        <WhyChooseUs />
        <ServiceHighlights />
        <Testimonials />
        <FAQ/>

        <BookingCta />

    </div>
        </>
    )
}

