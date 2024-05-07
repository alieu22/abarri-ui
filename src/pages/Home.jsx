import NavrBar from "../components/NavrBar";
import Footer from "../components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import DemoCarousel from "./Carousel";

function Home() {
    return (
        <>
            <NavrBar></NavrBar>
            <DemoCarousel></DemoCarousel>
        <div className="container my-5">
            <div className="row">
                <div className="col-12 col-lg-12 text-center">
                    <h1 className="text-dark">Mission Statement</h1>
                    <p>At Abarri Adult Family Home LLC, our mission is to provide a
                         nurturing and supportive environment where our residesnts
                         feel valued, respected, and empowered. We are committed 
                         to delivering personalized care that promotes independence,
                         dignity, and quality of life for each individual we serve.</p>

                    <p> 
                        Through compassion, integrity, and dedication, we strive to 
                        create a warm and welcoming home where families can trust 
                        that their loved ones recieve the highest standard of care
                        and attention. Our team is driven by the belief that every
                        resident deserves to live life to the fullest, and we are 
                        honored to be a part of their journey.
                    </p>

                </div>
            </div>
            <hr />
            <div className="row d-flex align-items-center text-center">
                <div className="col-12 col-lg-4 p-2">
                    <img className="img-fluid img-cover" src="/assets/images/elders.png" />
                </div>

                <div className="col-12 col-lg-4 p-2">
                     <img className="img-fluid img-cover" src="/assets/images/help.png" />
                </div>

                <div className="col-12 col-lg-4 p-2">
                    <img className="img-fluid img-cover" src="/assets/images/house.png" />
                </div>
            </div>
           
        </div>
            <Footer></Footer>
        </>
    )
}

export default Home;