import React, { useState } from "react";
import "./App.css";
import Dashboard from "./Components/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/header/Header";
import Footer from "./Components/footer/Footer";
import LogIn from "./Components/userForm/LogIn";
// import Row from 'react-bootstrap/Row'

const App = () => {
  const [filterData, setFilterData] = useState({
    category: "general",
    country: "in",
    pageSize: 9,
    pageNo: 1,
    searchText: "",
    api: "addfc84c662c49ac8c356eee82f21d55",
  });
  const loggedIn = localStorage.getItem("loggedIn");
  // console.log(loggedIn);

  return (
    <React.Fragment>
      <Router>
        <Header setFilterData={setFilterData} />
        <Switch>
          {!loggedIn && <Route exact path="/" component={LogIn} />}

          <Route
            path="/news"
            render={() =>
              loggedIn ? <Dashboard filterData={filterData} /> : <LogIn />
            }
          />
        </Switch>
        <Footer />
      </Router>
    </React.Fragment>
  );
};
export default App;
