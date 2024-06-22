// import { FaHistory } from "react-icons/fa";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { MdOutlineReportGmailerrorred, MdLogout, MdHome } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

import { IoMdAddCircleOutline } from "react-icons/io";
export const sideList = [
  { icon: <MdHome className="text-2xl" />, title: "Home", path: "/review" },
  {
    icon: <IoMdAddCircleOutline className="text-2xl" />,
    title: "New Report",
    path: "/history",
  },
  {
    icon: <RiMoneyRupeeCircleLine className="text-2xl" />,
    title: "Points",
    path: "/points",
  },
  {
    icon: <MdOutlineReportGmailerrorred className="text-2xl" />,
    title: "Report",
    path: "/report",
  },
  {
    icon: <CgProfile className="text-2xl" />,
    title: "Profile",
    path: "/profile",
  },
  {
    icon: <MdLogout className="text-2xl" />,
    title: "Logout",
    path: "/review",
  },
];
