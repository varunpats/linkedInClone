import React, { useState, useMemo } from 'react';
import Profile from '../pages/Profile';
import Topbar from '../components/common/Topbar';
import { getCurrentUser } from '../api/FirestoreApi';

export default function ProfileLayout() {
    const [currentUser, setCurrentUser] = useState({});

    useMemo(() => {
        getCurrentUser(setCurrentUser);
    }, []);

    return (
        <div>
            <Topbar />
            <Profile currentUser={currentUser} />
        </div>
    )
}
