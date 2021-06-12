import React from 'react'
import { useHistory } from 'react-router';
import './BlogCard.css'

export default function BlogCard({title, content, key, date, image}) {
    let history = useHistory();
    return (
        <div className="MyBlogs_blog" onClick={() => history.push(`/blog/${key}`)}>
            <div className="MyBlogs_blogLeft" style={{backgroundImage: `url(${image})`}} />
            <div className="MyBlogs_blogRight">
                <div className="BlogDate">{date}</div>
                <div className="BlogTitle"><h4>{title}</h4></div>
                <div className="BlogDesc">{content.substring(0, 160)}...</div>
            </div>
        </div>
    )
}
