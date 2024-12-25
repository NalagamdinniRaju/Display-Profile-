import React from 'react';
import { motion } from 'framer-motion';
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBirthdayCake,
  FaMapMarkerAlt,
  FaVenusMars,
  FaHome
} from 'react-icons/fa';
import InfoCard from './InfoCard';
import '../styles/Design2.css';

const Design2 = ({ user }) => {
  return (
    <div className="userapp">
      <div className="userapp-wrapper">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="userapp-card"
        >
          <div className="userapp-grid">
            <ProfileImageSection user={user} />
            <DetailsSection user={user} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const ProfileImageSection = ({ user }) => (
  <div className="userapp-image-section">
    <motion.div 
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="userapp-img-container"
    >
      <img
        src={user.picture.large}
        alt={`${user.name.first} ${user.name.last}`}
        className="userapp-image"
      />
      <div className="userapp-overlay" />
      <div className="userapp-info">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="userapp-name-wrapper"
        >
          <h1 className="userapp-username">
            {user.name.first} {user.name.last}
          </h1>
          <p className="userapp-usertitle">
            {user.name.title} {user.name.first} {user.name.last}
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="userapp-gender"
        >
          <FaVenusMars className="userapp-gender-icon" />
          <span className="userapp-gender-text">{user.gender}</span>
        </motion.div>
      </div>
    </motion.div>
    <AddressContainer user={user} />
  </div>
);

const AddressContainer = ({ user }) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.5 }}
    className="userapp-address"
  >
    <div className="userapp-address-line">
      <FaHome className="userapp-addr-icon userapp-home" />
      <span className="userapp-addr-text">
        {user.location.street.number} {user.location.street.name}
      </span>
    </div>
    <div className="userapp-address-line">
      <FaMapMarkerAlt className="userapp-addr-icon userapp-location" />
      <span className="userapp-addr-text">
        {user.location.city}, {user.location.state}, {user.location.country}, {user.location.postcode}
      </span>
    </div>
  </motion.div>
);

const DetailsSection = ({ user }) => (
  <motion.div 
    initial={{ x: 20, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ delay: 0.7 }}
    className="userapp-details"
  >
    <InfoCard
      icon={<FaUser className="userapp-icon userapp-pink" />}
      label="First Name"
      value={user.name.first}
    />
    <InfoCard
      icon={<FaUser className="userapp-icon userapp-fuchsia" />}
      label="Last Name"
      value={user.name.last}
    />
    <InfoCard
      icon={<FaVenusMars className="userapp-icon userapp-violet" />}
      label="Gender"
      value={user.gender}
      className="capitalize"
    />
    <InfoCard
      icon={<FaPhone className="userapp-icon userapp-blue" />}
      label="Phone"
      value={user.phone}
    />
    <InfoCard
      icon={<FaEnvelope className="userapp-icon userapp-emerald" />}
      label="Email"
      value={user.email}
    />
    <InfoCard
      icon={<FaBirthdayCake className="userapp-icon userapp-purple" />}
      label="Age"
      value={`${user.dob.age} years`}
    />
  </motion.div>
);

export default Design2;