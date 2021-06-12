import React from 'react'
import './HomePage.css';
import Header from '../../components/HomePage/Header/Header';
import Footer from '../../components/HomePage/Footer/Footer';
import BlogCard from '../../components/HomePage/BlogCard/BlogCard';
import {AiOutlinePlus} from 'react-icons/ai';

export default function HomePage() {
    return (
        <div className="myBlogs__home">
            <Header />
            <div className="MyBlogs_HomeContainer">
                <div className="MyBlogs_BlogContainer">
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                </div>
            </div>
            <div className="AddBlog">
                <div className="AddBlogButton">
                    <AiOutlinePlus size={30} color="white" />
                </div>
                <p className="AddBlogText">Add Blog</p>
            </div>            
            <Footer />
        </div>
    )
}
