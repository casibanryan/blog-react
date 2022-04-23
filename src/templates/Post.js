import NavBar from "./NavBar";
import Footer from './Footer';
import blogData from './js/blogData';
import { useParams } from 'react-router-dom';
import BlogList from './component/BlogList';
import React from 'react';
import ErrorPage404 from "./component/404";

function Post() {

    const { name } = useParams();
    //finding the correct data
    const blog = blogData.find(data => data.subtitle.split(' ').join('-') === name);
    // filtering the data 
    const relatedBlog = blogData.filter(data => data.subtitle.split(' ').join('-') !== name);

    // error page
    if (!blog) return <ErrorPage404 />;

    return (
        <>
            <NavBar />
            <header className="masthead" style={{ backgroundImage: `url(${blog.background})` }}>
                <div className="container position-relative px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <div className="post-heading">
                                <h1> {blog.title} </h1>
                                <h2 className="subheading">{blog.subtitle}</h2>
                                <span className="meta">
                                    Posted by Resty Ochea
                                    on {blog.postedOn}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <article className="mb-4">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            {blog.content.map((paragraph, index) => (
                                <React.Fragment key={index}>
                                    <p> {paragraph} </p>
                                    <h2 className="section-heading"> {index == 0 ? blog.subtitle : null} </h2>
                                    {index == 0 ? <a href="#!"><img className="img-fluid" src={blog.image} alt="blog-image" /></a> : null}
                                </React.Fragment>
                            ))}
                            <h1 className="text-center text-success">Related Blog</h1>

                            <BlogList blogs={relatedBlog} />
                        </div>
                    </div>
                </div>
            </article>
            <Footer />
        </>
    );
}

export default Post;