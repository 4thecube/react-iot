import React from "react";
import CardList from "../../components/card-list/CardList";
import Logout from "../../components/logout/Logout";

import "./Dashboard.scss";

const Dashboard = () => {
  return (
      <div className="dashboard">
        <div className="dashboard__logout-button">
          <Logout />
        </div>
        <CardList />
      </div>
  );
};

export default Dashboard;
