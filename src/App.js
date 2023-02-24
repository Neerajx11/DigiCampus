import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Auth from "./components/Auth";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import Result from "./components/Result";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<PrivateRoute component={Dashboard} />} />
        <Route path="/result" element={<PrivateRoute component={Result} />} />
      </Routes>
    </Router>
  );
};

export default App;
