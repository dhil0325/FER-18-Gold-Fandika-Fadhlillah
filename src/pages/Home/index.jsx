import Banner from "../../components/Banner";
import NavBanner from "../../components/NavBanner";
import Navbar from "../../components/NavLink";
import Service from "../../components/Service";
import Testimonial from "../../components/Testimonial";
import WhyUs from "../../components/WhyUs";
import FAQ from "../../components/FAQ";
import Footer from "../../components/Footer";
function Home() {
    return (
        <>
            <Navbar />
            <NavBanner />
            <Service />
            <WhyUs />
            <Testimonial />
            <Banner />
            <FAQ />
            <Footer />
        </>
    )
}

export default Home