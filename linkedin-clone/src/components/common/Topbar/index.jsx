import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HiUsers, HiBriefcase, HiSearch } from 'react-icons/hi';
import { FaHome } from 'react-icons/fa';
import { AiFillMessage } from 'react-icons/ai';
import { BsFillBellFill } from 'react-icons/bs';
import ProfilePopup from '../ProfilePopup/index.jsx';
import './index.scss';
import logo from '../../../assets/Linkedin-icon.png';
import user from '../../../assets/user.png';

export default function Topbar() {
  let navigate = useNavigate();
  return (
    <div className='topbar-main'>
      <img src={logo} className='linkedin-logo' alt="LinkedIn logo" />
      <div className='react-icons'>
        <HiSearch className='react-icon' style={{ fontSize: '26px' }} />
        <FaHome className='react-icon' style={{ fontSize: '26px' }} onClick={() => navigate('/home')} />
        <HiUsers className='react-icon' style={{ fontSize: '26px' }} />
        <HiBriefcase className='react-icon' style={{ fontSize: '26px' }} />
        <AiFillMessage className='react-icon' style={{ fontSize: '26px' }} />
        <BsFillBellFill className='react-icon' style={{ fontSize: '26px' }} />
      </div>
      <img src={user} className='user-logo' alt="User logo" />
    </div>
  )
}
