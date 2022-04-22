import { Helmet } from 'react-helmet';
import homeBg from './assets/img/home-bg.png';
import NavBar from './NavBar';
import Footer from './Footer';


function Home() {

    return (
        <>
            <NavBar />
            <header className="masthead" id="home"
                style={{ backgroundImage: `url(${homeBg})` }} >
                <div className="container position-relative px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <div className="site-heading">
                                <h1>Cebu Blog</h1>
                                <span className="subheading">A Travel Blog about cebu city</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">

                        <div className="post-preview">
                            <a href="post.html">

                                <h2 className="post-title">
                                    blogData </h2>

                                <h3 className="post-subtitle">Problems look mighty small from 150 miles up</h3>
                            </a>
                            <p className="post-meta">
                                Posted by
                                <a href="#!">Start Bootstrap</a>
                                on September 24, 2022
                            </p>
                        </div>
                        <hr className="my-4" />

                        <div className="d-flex justify-content-end mb-4"><a className="btn btn-primary text-uppercase" href="#!">Older
                            Posts →</a></div>
                    </div>
                </div>
            </div>

            <Footer />
            <Helmet>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
                <script src="./js/scripts.js" type='text/javascript' />
            </Helmet>
        </>

    );

}
export default Home;