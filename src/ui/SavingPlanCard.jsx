import "../styles/ui/SavingPlanCard.css";

const contents = [
  {
    name: "bali",
    title: "Bali Vacation",
    description: "Target: August 25 2022",
    totalAmt: "$ 4000",
    savedAmt: "$ 1920,21",
    savedPercent: 48,
  },
  {
    name: "gadget",
    title: "New Gadget",
    description: "Target: August 25 2022",
    totalAmt: "$ 1000",
    savedAmt: "$ 790,21",
    savedPercent: 79,
  },
  {
    name: "charity",
    title: "Charity",
    description: "Target: August 25 2022",
    totalAmt: "$ 100",
    savedAmt: "$ 32,111",
    savedPercent: 32,
  },
];

const Card = ({
  content: { name, title, description, totalAmt, savedAmt, savedPercent },
}) => {
  return (
    <div className="content">
      <div className="content-header">
        <p>{title}</p>
        <span>{description}</span>
      </div>
      <div className="target-percent">
        <div className="target">
          <span className="saved-amt">{savedAmt}</span>
          <span className="total-amt">/{totalAmt}</span>
        </div>
        <div className={`saved-percent saved-percent-${name}`}>
          <span>{savedPercent}%</span>
        </div>
      </div>
      <div className="progress-container">
        <div className={`progress-bar ${name}`}></div>
      </div>
    </div>
  );
};

const SavingPlanCard = () => {
  return (
    <div className="savingplan-card card">
      <div className="savingplan-header">
        <p className="title">Saving Plan</p>
        <span>See All</span>
      </div>
      <hr className="divider" />
      <div className="savingplan-card-content">
        {contents.map((content, index) => (
          <Card content={content} key={index} />
        ))}
      </div>
    </div>
  );
};

export default SavingPlanCard;
