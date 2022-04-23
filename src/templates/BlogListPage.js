import BlogList from './component/BlogList';
import blogData from './js/blogData';
import React from 'react';


const BlogListPage = () => (
    <React.Fragment>
        <BlogList blog={blogData} />
    </React.Fragment>
)


export default BlogListPage;