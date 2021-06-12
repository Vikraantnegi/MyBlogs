import React from 'react'
import { useHistory } from 'react-router';
import './BlogCard.css'

export default function BlogCard() {
    let history = useHistory();
    return (
        <div className="MyBlogs_blog" onClick={() => history.push('/blog')}>
            <div className="MyBlogs_blogLeft" />
            <div className="MyBlogs_blogRight">
                <div className="BlogDate">Mar 10</div>
                <div className="BlogTitle"><h4>Title</h4></div>
                <div className="BlogDesc">has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book </div>
            </div>
        </div>
    )
}
