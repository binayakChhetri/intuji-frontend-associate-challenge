import "../styles/pages/Dashboard.css";

import SearchBar from "../ui/SearchBar";
import HeaderActions from "../ui/HeaderActions";
import OverviewCard from "../ui/OverviewCard";
import SavingPlanCard from "../ui/SavingPlanCard";
import AnalyticsCard from "../ui/AnalyticsCard";
import TransactionCard from "../ui/TransactionCard";
const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <SearchBar />
        <HeaderActions />
      </header>
      <section className="dashboard-body">
        <OverviewCard />
        <SavingPlanCard />
        <AnalyticsCard />
        <TransactionCard />
      </section>
    </div>
  );
};

export default Dashboard;
