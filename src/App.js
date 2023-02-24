import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Attendance from "./components/Attendance";
import Auth from "./components/Auth";
import Dashboard from "./components/Dashboard";
import Overview from "./components/Overview";
import PrivateRoute from "./components/PrivateRoute";
import Result from "./components/Result";
import Notice from "./components/Notice";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<PrivateRoute component={Dashboard} />} />
        <Route path="/result" element={<PrivateRoute component={Result} />} />
        <Route
          path="/overview"
          element={<PrivateRoute component={Overview} />}
        />
        <Route path="/notice" element={<PrivateRoute component={Notice} />} />
        <Route
          path="/attendance"
          element={<PrivateRoute component={Attendance} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
