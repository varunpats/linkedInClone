import React, { useState } from 'react';
import ModalCmp from '../Modal/index';
import { addPosts } from '../../../api/FirestoreApi';
import './index.scss';

export default function PostStatus() {
    const [modalOpen, setModalOpen] = useState(false);
    const [status, setstatus] = useState('');

    const sendStatus = async() => {
        await addPosts(status);
        setModalOpen(false);
        setstatus('');
    }

    return (
        <div className='post-status-main'>
            <div className='post-status'>
                <button className='open-post-modal' onClick={() => setModalOpen(true)}>Start a Post</button>
            </div>
            <ModalCmp modalOpen={modalOpen} setModalOpen={setModalOpen} sendStatus={sendStatus} status={status} setstatus={setstatus} />
        </div>
    )
}
