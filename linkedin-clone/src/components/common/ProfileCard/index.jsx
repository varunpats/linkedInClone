import './index.scss';

export default function ProfileCard({ currentUser }) {
    return <div className='profile-card'>
        <h3 className='username'>{currentUser[0]?.name}</h3>
    </div>
}