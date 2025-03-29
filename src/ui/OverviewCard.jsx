import "../styles/ui/OverviewCard.css";

import blcLogo from "../assets/overview.svg";
import blcInc from "../assets/balance_increase.svg";
import arrow_blc from "../assets/arrow_right_blc.svg";

import arrow from "../assets/arrow-right.svg";

import savingLogo from "../assets/saving.svg";
import savingInc from "../assets/saving_increase.svg";

import expenses from "../assets/expenses.svg";
import expensesInc from "../assets/expenses_increase.svg";

import income from "../assets/incomes.svg";
import incomeInc from "../assets/incomes_increase.svg";
const contents = [
  {
    title: "Your balance",
    logo: {
      main: blcLogo,
      inc: blcInc,
      arrow: arrow_blc,
    },
    description: "15% compared with last month",
    amount: "$28,891.138",
  },
  {
    title: "Saving",
    logo: {
      main: savingLogo,
      inc: savingInc,
      arrow: arrow,
    },
    description: "10% compared with last month",
    amount: "$1,050.44",
  },
  {
    title: "Expenses",
    logo: {
      main: expenses,
      inc: expensesInc,
      arrow: arrow,
    },
    description: "2% compared with last month",
    amount: "$200.31",
  },
  {
    title: "Incomes",
    logo: {
      main: income,
      inc: incomeInc,
      arrow: arrow,
    },
    description: "8% compared with last month",
    amount: "$21,121.0",
  },
];

const Card = ({ content: { title, logo, description, amount } }) => {
  return (
    <div
      className={title === "Your balance" ? "content blc-content" : "content"}
    >
      <div className="logo-title">
        <img src={logo.main} alt={title} />
        <div className="title-description">
          <p>{title}</p>
          <p className="description">
            <img src={logo.inc} alt="% increase" />
            <span>{description}</span>
          </p>
        </div>
      </div>
      <hr className="divider" />
      <div className="amount">
        <p>{amount}</p>
        <img src={logo.arrow} alt="arrow-logo" />
      </div>
    </div>
  );
};

const OverviewCard = () => {
  return (
    <div className="overview-card card">
      <p className="title">Overview</p>
      <div className="overview-card-content">
        {contents.map((content, index) => (
          <Card content={content} key={index} />
        ))}
      </div>
    </div>
  );
};

export default OverviewCard;
