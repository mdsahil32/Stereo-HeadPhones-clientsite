import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div>
            blog ----------
            <Link to={'/'}> Home</Link>
        </div>
    );
};

export default Blog;