import { Switch, Route, BrowserRouter as Router,Redirect } from "react-router-dom";
import Home from './Home/Home'

import Orders from './Orders/Orders'

function App() {
  return (
    <Router>
      <Switch>

        <Route exact path="/" component={Home} />
        <Route exact path="/Orders" component={Orders} />
        <Route exact path="/NothingFound" component={()=><h1>Nothing Found</h1>}/>
        <Redirect to="/NothingFound"/>

      </Switch>
    </Router>
  );
}

export default App;
