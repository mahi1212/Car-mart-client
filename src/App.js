import Home from './Pages/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Products from './Pages/Home/Products/Products';
import Login from './Pages/Home/Login/Login';
import Register from './Pages/Home/Register/Register';
import Explore from './Pages/Home/Explore/Explore';
import PageNotFound from './Pages/PageNotFound/PageNotFound';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          {/* <Route path="/products">
            <Products></Products>
          </Route> */}
          <Route path="/explore">
            <Explore></Explore>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="*">
            <PageNotFound></PageNotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
