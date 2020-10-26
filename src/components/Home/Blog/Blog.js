import React from 'react';
import blogData from '../../fakeData/blogData';

const Blog = () => {
    return (
        <section className="blog my-5">
            <div className="container">
                <div className="section-header text-center">
                <h5 className='text-brand font-weight-bolder'>OUR BLOG</h5>
                <h1 className='text-solid'>From Our Blog News</h1>
                </div>
                
                <div className="card-deck mt-5">
                    {
                        blogData.map(blog =>
                            <div key={blog.title} className="card border-0 shadow px-2 py-4">
                                <div className="card-header p-0 d-flex  align-items-center">
                                    <img className="mx-3" src={blog.authorImg} alt="" height="60" />
                                    <div>
                                        <h6 className="text-solid font-weight-bold m-0">{blog.author}</h6>
                                        <p className="text-secondary m-0">{blog.date}</p>
                                    </div>
                                </div>
                                <div className="card-body text-justify">
                                    <h5 className="text-solid">{blog.title}</h5>
                                    <p className="card-text text-secondary mt-4">{blog.description}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default Blog;