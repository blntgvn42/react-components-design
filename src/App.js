import { Link, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/modal" component={Modal} />
        <Route path="/header" component={Header} />
        <Route path="/" component={Home} />
      </Switch>
      <Link to="/" className="goBack">
        Go Back
      </Link>
    </div>
  );
}

export default App;
