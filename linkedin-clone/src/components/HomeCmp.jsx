import React from 'react';
import PostStatus from './common/PostUpdate/index';

export default function HomeCmp({ currentUser }) {
  return (
    <div className='home-component'>
      <PostStatus currentUser={currentUser} />
    </div>
  )
}
