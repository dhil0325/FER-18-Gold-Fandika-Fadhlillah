import Banner from "../../components/Banner";
import NavBanner from "../../components/NavBanner";
import Service from "../../components/Service";
import Testimonial from "../../components/Testimonial";
import WhyUs from "../../components/WhyUs";
import FAQ from "../../components/FAQ";
import Footer from "../../components/Footer";
import NavHome from "../../components/NavHome";
function Home() {
    return (
        <>
            <NavHome />
            <NavBanner />
            <Service id="ourservice" />
            <WhyUs id="whyus" />
            <Testimonial id="testimonial" />
            <Banner />
            <FAQ id="faq" />
            <Footer />
        </>
    )
}

export default Home