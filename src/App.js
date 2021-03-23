import { Redirect, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "./contexts/AuthContext";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";

import "./App.css";
import 'mapbox-gl/dist/mapbox-gl.css';

function App() {
  const { currentUser } = useAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    setIsLoggedIn(currentUser);
  }, [currentUser]);

  return (
    <div className="App">
      <Route path="/">
        {isLoggedIn ? <Redirect to="/dashboard" /> : <Login />}
      </Route>
      <Route path="/dashboard">
        {isLoggedIn ? <Dashboard /> : <Redirect to="/" />}
      </Route>
    </div>
  );
}

//TODO: today we will contain stupid components into bit SignIn (SignOut) components and create routes for app. Dashbord if user is auth.

export default App;
