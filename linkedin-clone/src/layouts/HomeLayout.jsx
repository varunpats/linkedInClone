import React, { useState, useMemo } from 'react';
import Home from '../pages/Home';
import Topbar from '../components/common/Topbar';
import { getCurrentUser } from '../api/FirestoreApi';

export default function HomeLayout() {
    const [currentUser, setCurrentUser] = useState({});

    useMemo(() => {
        getCurrentUser(setCurrentUser);
    }, []);

    return (
        <div>
            <Topbar />
            <Home currentUser={currentUser} />
        </div>
    )
}
