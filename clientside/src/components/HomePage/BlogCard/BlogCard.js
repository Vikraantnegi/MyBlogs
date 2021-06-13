import React from 'react'
import { useHistory } from 'react-router';
import './BlogCard.css'
import { IMAGE_ENDPOINT } from '../../../AdminServices/baseUrl';

export default function BlogCard({title, content, id, date, image}) {
    let history = useHistory();
    const imageUrl = image && `${IMAGE_ENDPOINT}${image}`;
    return (
        <div className="MyBlogs_blog" onClick={() => history.push(`/blog/${id}`)}>
            <div className="MyBlogs_blogLeft" style={{backgroundImage: `url(${imageUrl})`}} />
            <div className="MyBlogs_blogRight">
                <div className="BlogDate">{date}</div>
                <div className="BlogTitle"><h4>{title}</h4></div>
                <div className="BlogDesc">{content.substring(0, 160)}...</div>
            </div>
        </div>
    )
}
