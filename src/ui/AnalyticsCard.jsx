import { useState, useEffect } from "react";
import "../styles/ui/AnalyticsCard.css";
import label1 from "../assets/label1.svg";
import label2 from "../assets/label2.svg";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { label: "Sun", label1: 12000, label2: 5000 },
  { label: "Mon", label1: 9000, label2: 8000 },
  { label: "Tue", label1: 5000, label2: 5500 },
  { label: "Wed", label1: 15000, label2: 10000 },
  { label: "Thu", label1: 8000, label2: 4500 },
  { label: "Fri", label1: 20000, label2: 7000 },
  { label: "Sat", label1: 17000, label2: 9200 },
];
const Chart = () => {
  const [height, setHeight] = useState("80%");
  const handleResize = () => {
    setHeight(window.innerWidth <= 550 ? "50%" : "80%");
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return (
    <ResponsiveContainer
      width="100%"
      height={height}
      className="chart-container"
    >
      <AreaChart
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 13,
        }}
      >
        <defs>
          <linearGradient id="colorGradient1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F8CD70" stopOpacity={1} />
            <stop offset="100%" stopColor="#F8CD70" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorGradient2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4745A4" stopOpacity={1} />
            <stop offset="100%" stopColor="#4745A4" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid
          strokeDasharray="15 15"
          vertical={false}
          stroke="#99999936"
        />
        <XAxis
          dataKey="label"
          tick={{ fill: "#999999", fontSize: 14, dy: 16 }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          tickFormatter={(tick) => (tick === 0 ? "0k" : `${tick / 1000}k`)}
          tick={{ fill: "#999999", fontSize: 14, dx: -18 }}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip
          content={({ payload, label }) => {
            if (!payload || payload.length === 0) return null;
            const { label1, label2 } = payload[0].payload;
            return (
              <div className="custom-tooltip">
                <p>
                  <strong>Day:</strong> {label}
                </p>
                <p>
                  <strong>Label 1:</strong> {label1}
                </p>
                <p>
                  <strong>Label 2:</strong> {label2}
                </p>
              </div>
            );
          }}
        />{" "}
        <Area
          type="monotone"
          dataKey="label1"
          stroke="#4745A4"
          strokeWidth={2}
          fill="url(#colorGradient2)"
          fillOpacity={0.3}
        />
        <Area
          type="monotone"
          dataKey="label2"
          stroke="#F8CD70"
          strokeWidth={3}
          fill="url(#colorGradient1)"
          fillOpacity={0.3}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
const AnalyticsCard = () => {
  return (
    <div className="analytics-card card">
      <div className="analytics-header">
        <p className="title">Analytics </p>
        <div className="label-dropdown">
          <div className="label-container">
            <div className="label">
              <img src={label1} alt="label 1" />
              <span>Label 1</span>
            </div>
            <div className="label">
              <img src={label2} alt="label 2" />
              <span>Label 2</span>
            </div>
          </div>
          <div className="dropdown-container">
            <select defaultValue="weekly">
              <option value="weekly">Weekly</option>
              <option value="daily">Daily</option>
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
            </select>
          </div>
        </div>
      </div>
      <Chart />
    </div>
  );
};

export default AnalyticsCard;
