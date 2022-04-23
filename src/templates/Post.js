import NavBar from "./NavBar";
import Footer from './Footer';
import blogData from './js/blogData';
import { useParams } from 'react-router-dom';
import React from 'react';

function Post() {

    const { name } = useParams();
    const blog = blogData.find(data => data.subtitle.split(' ').join('-') === name);

    // replace this later with 404 page
    if (!blog) return <h1>Blog does not exist!</h1>

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


                            {blogData.map((blog, index) => (
                                <div className="post-preview" key={index}>
                                    <Link to={`post/${blog.subtitle.split(' ').join('-')}`}>
                                        <h2 className="post-title" >  {blog.title}  </h2>
                                        <h3 className="post-subtitle"> {blog.subtitle} </h3>
                                    </Link>
                                    <p className="post-meta" >
                                        Posted by Resty Ochea on {blog.postedOn}
                                    </p>
                                    <hr className="my-4" />
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </article>
            <Footer />
        </>
    );
}

export default Post;