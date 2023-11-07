import React from 'react';
import './index.scss';

export default function PostCard({ post }) {
    return (
        <div className='posts-card'>
            <p className='name'>{post.userName}</p>
            <p className='timestamp'>{post.timestamp}</p>
            <p className='status'>{post.status}</p>
        </div>
    )
}
