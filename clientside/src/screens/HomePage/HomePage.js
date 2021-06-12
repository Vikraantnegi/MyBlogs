import React, {useEffect} from 'react'
import './HomePage.css';
import Header from '../../components/HomePage/Header/Header';
import Footer from '../../components/HomePage/Footer/Footer';
import BlogCard from '../../components/HomePage/BlogCard/BlogCard';
import {AiOutlinePlus} from 'react-icons/ai';
import {useSelector, useDispatch} from 'react-redux';
import { AllBlogs } from '../../features/blogs/blogSlice';
import AdminService from '../../AdminServices/AdminService';

export default function HomePage() {
    const dispatch = useDispatch();
    const blogList = useSelector(AllBlogs);
    useEffect(() => {
        AdminService.getAll()
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err))
    }, [])
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
