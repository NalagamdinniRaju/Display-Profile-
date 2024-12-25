import React from 'react';
import { MdEmail, MdPhone, MdLocationOn, MdCake, MdPerson, MdWc } from 'react-icons/md';
import '../styles/Design1.css';

const Design1 = ({ userData }) => {
  return (
    <main className="main-container">
      <div className="profile-card">
        <div className="profile-content">
          <div className="profile-left">
            <div className="profile-image-container">
              <img src={userData.picture.large} alt="Profile" className="profile-image" />
            </div>
            <h1 className="profile-name">
              {userData.name.first} {userData.name.last}
            </h1>
            <p className="profile-username">{userData.login.username}</p>
          </div>

          <div className="profile-right">
            <h2 className="section-title">Personal Information</h2>
            <div className="info-container">
              {/* Info items */}
              <InfoItem icon={<MdPerson />} label="First Name" value={userData.name.first} />
              <InfoItem icon={<MdPerson />} label="Last Name" value={userData.name.last} />
              <InfoItem icon={<MdWc />} label="Gender" value={userData.gender} className="capitalize" />
              <InfoItem icon={<MdEmail />} label="Email" value={userData.email} />
              <InfoItem icon={<MdPhone />} label="Phone" value={userData.phone} />
              <InfoItem 
                icon={<MdLocationOn />} 
                label="Location" 
                value={`${userData.location.city}, ${userData.location.country}`} 
              />
              <InfoItem 
                icon={<MdCake />} 
                label="Birthday" 
                value={`${new Date(userData.dob.date).toLocaleDateString()} (Age: ${userData.dob.age})`} 
              />
            </div>

            <h2 className="section-title address-title">Address</h2>
            <div className="address-container">
              <p>{userData.location.street.number} {userData.location.street.name},</p>
              <p>{userData.location.city}, {userData.location.state} {userData.location.postcode}</p>
              <p>{userData.location.country}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

const InfoItem = ({ icon, label, value, className = "" }) => (
  <div className="info-item">
    {React.cloneElement(icon, { className: "info-icon" })}
    <span className="info-label">{label}:</span>
    <span className={`info-value ${className}`}>{value}</span>
  </div>
);

export default Design1;