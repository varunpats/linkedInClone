import React, { useState, useMemo } from 'react';
import ModalCmp from '../Modal/index';
import { addPosts, getPosts } from '../../../api/FirestoreApi';
import PostCard from '../PostCard/index';
import { getCurrentTime } from '../../../helpers/useMoment';
import './index.scss';

export default function PostStatus() {
    const [modalOpen, setModalOpen] = useState(false);
    const [status, setStatus] = useState("");
    const [posts, setPosts] = useState([]);
    let userEmail = localStorage.getItem('userEmail');

    const sendStatus = async () => {
        let obj = {
            status,
            timestamp: getCurrentTime('lll'),
            userEmail: userEmail
        }

        await addPosts(obj);
        await setStatus("");
        await setModalOpen(false);
    }

    useMemo(() => {
        getPosts(setPosts)
    }, [])

    return (
        <div className='post-status-main'>
            <div className='post-status'>
                <button className='open-post-modal' onClick={() => setModalOpen(true)}>Start a Post</button>
            </div>
            <ModalCmp modalOpen={modalOpen} setModalOpen={setModalOpen} sendStatus={sendStatus} status={status} setStatus={setStatus} />

            {posts.map(post => {
                return (
                    <PostCard post={post} />
                )
            })}
        </div>
    )
}
