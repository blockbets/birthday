import balloons from "./images/balloons.jpg";
import "./index.css";
import { useGlobalContext } from "./context";
import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Countdown } from "./pages/Countdown";
import { Quiz } from "./pages/Quiz";
import { Presents } from "./pages/Presents";

function App() {
  return (
    <Router>
      <>
        <Navbar />

        <Switch>
          <Route path="/" exact>
            <Presents />
          </Route>
          <Route path="/quiz">
            <Quiz />
          </Route>
          <Route path="/presents">
            <Presents />
          </Route>
          <Route path="/Countdown">
            <Countdown />
          </Route>
          <Route path="*" />
        </Switch>
      </>
    </Router>
  );
}

export default App;
