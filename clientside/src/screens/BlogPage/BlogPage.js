import React from 'react'
import './BlogPage.css'
import Header from '../../components/BlogPage/Header/Header';
import Footer from '../../components/HomePage/Footer/Footer';
import {BsArrowLeft} from 'react-icons/bs';
import { useHistory } from 'react-router';

export default function BlogPage() {
    const history = useHistory();
    return (
        <div className="BlogContainer">
            <Header />
            <div className="MyBlogs_HomeContainer">
                <div className="MyBlogs_BlogContainer">
                    <div className="BackButton" onClick={() => history.goBack()}>
                        <BsArrowLeft size={30} color="white" />
                    </div>
                    <div className="BlogContent">
                        <div className="BlogContent__title">Title</div>
                        <div className="BlogContent__extras">
                            <div className="BlogContent__date"><span className="bold">Posted Date :</span> May 10</div>
                            <div className="BlogContent__author"><span className="bold">Author :</span> Vikrant Negi</div>
                        </div>
                        <div className="BlogContent__content">
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. 
                            Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going 
                            through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
                            This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is 
                            reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
