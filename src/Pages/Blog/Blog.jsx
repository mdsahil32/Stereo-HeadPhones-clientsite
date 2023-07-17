import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div className='py-44'>
            blog ----------
            <Link to={'/'}> Home</Link>
        </div>
    );
};

export default Blog;