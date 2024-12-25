import { motion } from 'framer-motion';
const InfoCard = ({ icon, label, value, className = "" }) => {
    return (
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="info-card"
      >
        <div className="info-card-content">
          <div className="userapp-icon-wrapper">
            {icon}
          </div>
          <div className="userapp-text-container">
            <p className="userapp-label">{label}</p>
            <p className={`userapp-value ${className}`}>{value}</p>
          </div>
        </div>
      </motion.div>
    );
  };
  
  export default InfoCard;