import aboutBg from './assets/img/about-bg.jpg';
import NavBar from './NavBar';
import Footer from './Footer';

function About() {
  return (
    <>
    <NavBar />
    <header class="masthead" style={{ backgroundImage: `url( ${aboutBg} )` }}>
        <div class="container position-relative px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-7">
                    <div class="page-heading">
                        <h1>About Cebu</h1>
                        <span class="subheading">Why choose cebu?</span>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <main class="mb-4">
        <div class="container px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-7">
                    <p>
                        Cebu Island is long and narrow, stretching 196 kilometres from north to south, and only 32
                        kilometres across its widest
                        point. It has countless coves and beaches, but it is the tiny islands just offshore that will
                        capture your heart.
                        Boasting sugar-white beaches, clear azure waters and astounding coral reefs just offshore, they
                        are holiday-brochure
                        perfect, but without the crowds.
                    </p>
                    <p>
                        Bantayan Island is probably the most famous, with its dazzling white beaches, cool breezes and
                        friendly locals. Camotes
                        Island boasts beautiful beaches too, particularly around Mangodlong and Santiago Bay, but offers
                        other activities for
                        visitors as well. Danao Lake is worth a visit, as is Bukilat Cave, or trek to the Altavista view
                        point for a
                        breathtaking panorama of the whole island.
                    </p>
                    <p>
                        Cebu and the islands that surround it are a diver’s paradise. Nalusuan Island, mentioned above,
                        is surrounded by a
                        protected marine garden. Malapascua Island is one the best places in the world to spot thresher
                        sharks. And the Moalboal
                        diving spot, just off the coast of the main island, features steep underwater walls that drops
                        from 3m down to 65m. It’s
                        a great place to encounter spectacular coral gardens, swim alongside sea turtles and get close
                        to hammerhead and white
                        tip sharks.
                    </p>
                </div>
            </div>
        </div>
    </main>
    <Footer />
    </>
    );
}


export default About;

