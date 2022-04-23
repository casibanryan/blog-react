import NavBar from "./NavBar";
import Footer from './Footer';
import blogData from './js/blogData';
import { useParams } from 'react-router-dom';

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
                        {blog.content.map((paragraph, index) => (
                            <div className="col-md-10 col-lg-8 col-xl-7" key={index}>
                                <p> {paragraph} </p>
                                <h2 className="section-heading"> {blog.subtitle} </h2>
                            </div>
                        ))}


                    </div>
                </div>
            </article>
            <Footer />
        </>
    );
}

export default Post;