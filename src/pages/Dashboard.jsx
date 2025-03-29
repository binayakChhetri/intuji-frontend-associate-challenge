import "../styles/pages/Dashboard.css";

import SearchBar from "../ui/SearchBar";
import HeaderActions from "../ui/HeaderActions";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <SearchBar />
        <HeaderActions />
      </header>
    </div>
  );
};

export default Dashboard;
