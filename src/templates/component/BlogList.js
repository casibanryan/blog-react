import React from "react";
import { Link } from 'react-router-dom';

function BlogList({ data }) {
    return (
        <React.Fragment>
            {data.map((blog, index) => (
                <div className="post-preview" key={index}>
                    <Link to={`/post/${blog.subtitle.split(' ').join('-')}`}>
                        <h2 className="post-title" >  {blog.title}  </h2>
                        <h3 className="post-subtitle"> {blog.subtitle} </h3>
                    </Link>
                    <p className="post-meta" >
                        Posted by Resty Ochea on {blog.postedOn}
                    </p>
                    <hr className="my-4" />
                </div>
            ))
            }
        </React.Fragment>
    );
}

export default BlogList;
