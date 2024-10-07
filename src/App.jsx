import "./app.scss"
import HomePage from "./components/home/HomePage";
import Questions from "./components/home/questions/Questions";
import Imatura from "./components/home/imatura/Imatura";
import Madura from "./components/home/madura/Madura";

import 'bulma/css/bulma.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  return (
    <Router>
      <div className="app">
      <Switch>
        <Route path="/" exact>
          <HomePage/>
        </Route>
        <Route path="/questoes" exact>
          <Questions/>
        </Route>
        <Route path="/imatura" exact>
          <Imatura/>
        </Route>
        <Route path="/madura" exact>
          <Madura/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;