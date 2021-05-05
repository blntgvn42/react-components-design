import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/header" component={Header} />
        <Route path="/" component={Header} />
      </Switch>
    </div>
  );
}

export default App;
