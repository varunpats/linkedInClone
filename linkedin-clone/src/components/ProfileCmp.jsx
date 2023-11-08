import ProfileCard from './common/ProfileCard/index.jsx';

export default function ProfileCmp({ currentUser }) {
    return (
        <div>
            <ProfileCard currentUser={currentUser} />
        </div>
    )
}