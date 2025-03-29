import { Bell, ChevronDown, Image, MessageSquareText } from "lucide-react";

import "../styles/ui/HeaderActions.css";

const HeaderActions = () => {
  return (
    <div className="header-actions">
      <div className="notification-icon">
        <Bell />
      </div>
      <div className="message-icon">
        <MessageSquareText />
      </div>
      <div className="profile">
        <div className="profile-icon">
          <Image />
        </div>
        <span>Mirie Kiritani</span>
        <ChevronDown />
      </div>
    </div>
  );
};

export default HeaderActions;
