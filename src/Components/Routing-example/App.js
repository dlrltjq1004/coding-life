import { HashRouter, Route } from "react-router-dom";
import Home from "./Components/Routing-example/Home";
import Games from "./Components/Routing-example/Games";
import Tutorial from "./Components/Routing-example/Tutorial";


function App() {
  return (
      <HashRouter>
        <Route path="/" exact={true} component={Home} />
        <Route path="/games"  component={Games} />
        <Route path="/tutorial"  component={Tutorial} />
      </HashRouter>
  );
}

export default App;
