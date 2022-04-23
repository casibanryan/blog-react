import { Helmet } from 'react-helmet';
import homeBg from './assets/img/home-bg.png';
import NavBar from './NavBar';
import Footer from './Footer';
import React from 'react';
import BlogListPage from './BlogListPage';



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
                        <BlogListPage />
                    </div>
                </div>
            </div>

            <Footer />
            <Helmet>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
            </Helmet>
        </>
    );
}
export default Home;