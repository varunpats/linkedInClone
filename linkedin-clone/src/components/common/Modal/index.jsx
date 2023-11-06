import React from 'react';
import { Button, Modal } from 'antd';
import './index.scss';

const ModalCmp = ({ modalOpen, setModalOpen, sendStatus, status, setStatus }) => {
    return (
        <>
            <Modal
                title="Create a post"
                centered
                open={modalOpen}
                onOk={() => setModalOpen(false)}
                onCancel={() => setModalOpen(false)}
                footer={[
                    <Button key="submit" onClick={sendStatus} type="primary" disabled={status.trim().length > 0 ? false : true}>
                        Post
                    </Button>
                ]}
            >
                <input className='modal-input' placeholder='What do you want to talk about?' onChange={(e) => setStatus(e.target.value)} />
            </Modal>
        </>
    );
};
export default ModalCmp;