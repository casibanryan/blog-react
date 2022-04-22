import { Helmet } from 'react-helmet';
import homeBg from './assets/img/home-bg.png';
import NavBar from './NavBar';
import Footer from './Footer';
import blogData from './js/blogData';
import React from 'react';
import { Link } from 'react-router-dom';




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

                        {blogData.map((blog, index) => (
                            <div className="post-preview" key={index}>
                                <Link to={`post/${blog.subtitle.split(' ').join('-')}`}>
                                    <h2 className="post-title" >  {blog.title}  </h2>
                                    <h3 className="post-subtitle"> {blog.subtitle} </h3>
                                </Link>
                                <p className="post-meta" >
                                    Posted by Resty Ochea on April 23, 2022
                                </p>
                                <hr className="my-4" />
                            </div>
                        ))}


                        <div className="d-flex justify-content-end mb-4"><a className="btn btn-primary text-uppercase" href="#!">Older
                            Posts →</a></div>
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