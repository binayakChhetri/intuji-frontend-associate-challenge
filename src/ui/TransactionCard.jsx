import "../styles/ui/TransactionCard.css";
import logo from "../assets/gallery_logo.svg";

const contents = [
  {
    title: "Figma",
    amount: "$ 100",
  },
  {
    title: "Youtube",
    amount: "$ 120",
  },
  {
    title: "Spotify",
    amount: "$ 15",
  },
  {
    title: "Freepik",
    amount: "$ 300",
  },
];

const Card = ({ content: { title, amount } }) => {
  return (
    <div className="content">
      <div className="logo-title-date">
        <div className="logo">
          <img src={logo} alt={title} />
        </div>
        <div className="title-date">
          <p>{title}</p>
          <span>August 20, 2022</span>
        </div>
      </div>
      <div className="amount-status">
        <p>{amount}</p>
        <span>Completed</span>
      </div>
    </div>
  );
};

const TransactionCard = () => {
  return (
    <div className="transaction-card card">
      <div className="transaction-header">
        <p className="title">Recent Transaction</p>
        <span>See All</span>
      </div>
      <hr className="divider" />
      <div className="transaction-content">
        {contents.map((content, index) => {
          return <Card content={content} key={index} />;
        })}
      </div>
    </div>
  );
};

export default TransactionCard;
