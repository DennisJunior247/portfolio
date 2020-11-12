import React from "react";
import List from "../../../CustomList";
import { BsStar as Important } from "react-icons/bs";
import { TiTick as Done } from "react-icons/ti";
import {
  FiCalendar as Today,
  FiClock as Scheduled,
  FiHome as Home,
} from "react-icons/fi";

const Schedule = () => {
  const listData = [
    {
      name: "Home",
      to: "/dashboard",
      icon: <Home className="icons" />,
    },
    {
      name: "today",
      to: "/today",
      icon: <Today className="icons" />,
    },
    {
      name: "Scheduled",
      to: "/scheduled",
      icon: <Scheduled className="icons" />,
    },
    {
      name: "Important",
      to: "/important",
      icon: <Important className="icons" />,
    },
    {
      name: "Done",
      to: "/done",
      icon: <Done className="icons" />,
    },
  ];
  return <List listData={listData} />;
};
export default Schedule;
