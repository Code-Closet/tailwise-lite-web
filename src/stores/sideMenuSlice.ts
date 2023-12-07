import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { icons } from "../base-components/Lucide";

export interface Menu {
  icon: keyof typeof icons;
  title: string;
  badge?: number;
  pathname?: string;
  subMenu?: Menu[];
  ignore?: boolean;
}

export interface SideMenuState {
  menu: Array<Menu | string>;
}

const initialState: SideMenuState = {
  menu: [
    "Home",
    {
      icon: "Home",
      pathname: "/",
      title: "Home",
    },
    "Cards",
    {
      icon: "Wallet",
      pathname: "/dashboard",
      title: "Accounts",
    },
    {
      icon: "ArrowLeftRight",
      pathname: "/dashboard-overview-2",
      title: "Transactions",
    },
    {
      icon: "ThumbsUp",
      pathname: "/dashboard-overview-3",
      title: "Approvals",
    },
    {
      icon: "BarChartBig",
      pathname: "/dashboard-overview-4",
      title: "Report",
    },
    "Commission",
    {
      icon: "GanttChartSquare",
      pathname: "/inbox",
      title: "Agent Hierarchy",
    },
    {
      icon: "UserSquare2",
      pathname: "/file-manager-list",
      title: "Agents",
    },
    {
      icon: "HelpingHand",
      pathname: "/file-manager-grid",
      title: "Commission Definition",
    },
    {
      icon: "HelpingHand",
      pathname: "/point-of-sale",
      title: "Reversal Definition",
    },
    {
      icon: "ArrowLeftRight",
      pathname: "/chat",
      title: "Transactions",
    },
    {
      icon: "BarChartBig",
      pathname: "/calendar",
      title: "Commission Report",
    },
    {
      icon: "BarChartBig",
      pathname: "/calendar",
      title: "Commission Hierarchy",
    },
    {
      icon: "BarChartBig",
      pathname: "/calendar",
      title: "Commission Detail",
    },
    "Manage",
    {
      icon: "Users",
      pathname: "/creative",
      title: "Users",
    },
    {
      icon: "LogOut",
      pathname: "/dynamic",
      title: "Logout",
    },
  ],
};

export const sideMenuSlice = createSlice({
  name: "sideMenu",
  initialState,
  reducers: {},
});

export const selectSideMenu = (state: RootState) => state.sideMenu.menu;

export default sideMenuSlice.reducer;
