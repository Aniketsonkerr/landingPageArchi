import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <article className="flex flex-col md:flex-row justify-center items-center min-h-screen px-5 md:px-10 gap-8">
        <section className="w-full md:w-2/5 font-semibold text-lg md:text-xl flex flex-col items-center text-center md:text-left">
          <p className="font-light leading-relaxed">
            Make-It is your ideal art department & creative services partner,
            specializing in bespoke art fabrication, sculpture,
            <br />
            <br />
            prop making, window displays & visual merchandise design.
            <br />
            <br />
            Our South London workshop provides excellent design consultancy and
            art manufacture for a variety of art and design projects, using a
            wide range of materials to make your project happen.
            <br />
            <br />
            <b>
              Do you need something made?
              <br />
              Email: info@make-it.london
              <br />
              Tel: 02087789303
              <br />
            </b>
          </p>
          <Link className="no-underline text-inherit mt-4">
            <button className="bg-red-600 text-white px-5 py-3 text-lg md:text-xl transition-all duration-300 hover:scale-105 shadow-lg">
              View Work Portfolio
            </button>
          </Link>
        </section>

        <div className="w-full md:w-[789px] h-[400px] md:h-svh">
          <Carousel className="h-full">
            <Carousel.Item>
              <img
                src="https://images.squarespace-cdn.com/content/v1/5489ccbce4b05cd65fee1cc1/1540116449261-NDS6VVENJJGC2E775TQ4/DSC_1420.jpg?format=1000w"
                alt="pic2"
                className="w-full h-full object-cover"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://images.squarespace-cdn.com/content/v1/5489ccbce4b05cd65fee1cc1/1603104850444-IWHAXF38M5UMYB2XJB4M/THIS-EARTH-OF-MAJESTY%2C-THIS-SEAT-OF-MARS_3stl_right-yellow.jpg?format=1000w"
                alt="pic3"
                className="w-full h-full object-cover"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://images.squarespace-cdn.com/content/v1/5489ccbce4b05cd65fee1cc1/1727352775615-UQAKRD9B76WLG39BA6U4/%25C2%25A9%2BLibby%2BHeaney%252C%2BEnt-%2B%2528non-earthly%2Bdelights%2529%252C%2B2024.%2BCourtesy%2Bof%2BGazelli%2BArt%2BHouse%2B%2526%2BLibby%2BHeaney.%2BPhotography%2Bby%2BDeniz%2BGuzel.%2B%25288%2529.jpg?format=1000w"
                alt="pic4"
                className="w-full h-full object-cover"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </article>

      <hr className="mx-5 md:mx-10 my-5"></hr>
    </>
  );
}

export default Home;
