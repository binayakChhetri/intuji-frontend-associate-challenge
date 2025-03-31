import "../styles/ui/HeaderActions.css";
import messageIcon from "../assets/message-icon.svg";
import notificationIcon from "../assets/notification-bell.svg";
import galleryIcon from "../assets/gallery_logo.svg";
import arrowDown from "../assets/arrow-down.svg";
const HeaderActions = () => {
  return (
    <div className="header-actions">
      <div className="notification-icon">
        <img src={notificationIcon} alt="notification" />
      </div>
      <div className="message-icon">
        <img src={messageIcon} alt="message" />
      </div>
      <div className="profile">
        <div className="profile-icon">
          <img src={galleryIcon} alt="gallery" />
        </div>
        <span>Mirie Kiritani</span>
        <img src={arrowDown} alt="arrow down" />
      </div>
    </div>
  );
};

export default HeaderActions;
