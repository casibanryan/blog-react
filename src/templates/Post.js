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
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            {blog.content.map((data, index) => (
                                data
                            ))}

                            <h2 className="section-heading">Reaching for the Stars</h2>
                            <p>As we got further and further away, it [the Earth] diminished in size. Finally it shrank to the
                                size of a marble, the most beautiful you can imagine. That beautiful, warm, living object looked
                                so fragile, so delicate, that if you touched it with a finger it would crumble and fall apart.
                                Seeing this has to change a man.</p>
                            <a href="#!"><img className="img-fluid" src="assets/img/post-sample-image.jpg" alt="..." /></a>
                            <span className="caption text-muted">To go places and do things that have never been done before –
                                that’s what living is all about.</span>
                            <p>Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year
                                mission: to explore strange new worlds, to seek out new life and new civilizations, to boldly go
                                where no man has gone before.</p>
                            <p>As I stand out here in the wonders of the unknown at Hadley, I sort of realize there’s a
                                fundamental truth to our nature, Man must explore, and this is exploration at its greatest.</p>
                            <p>
                                Placeholder text by
                                <a href="http://spaceipsum.com/">Space Ipsum</a>
                                &middot; Images by
                                <a href="https://www.flickr.com/photos/nasacommons/">NASA on The Commons</a>
                            </p>
                        </div>
                    </div>
                </div>
            </article>
            <Footer />
        </>
    );
}

export default Post;