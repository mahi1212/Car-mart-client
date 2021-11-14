import Home from './Pages/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './Pages/Home/Login/Login';
import Register from './Pages/Home/Register/Register';
import Explore from './Pages/Home/Explore/Explore';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Dashboard from './Pages/Dashboard/Dashboard';
import PrivateRoute from './Pages/Home/Login/PrivateRoute/PrivateRoute';
import Review from './Pages/Home/Review/Review';
import Payment from './Pages/Payment/Payment';
import Purchase from './Pages/Home/Purchase/Purchase';
import MyOrder from './Pages/Dashboard/MyOrder/MyOrder';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/explore">
              <Explore></Explore>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/review">
              <Review></Review>
            </PrivateRoute>
            <PrivateRoute path="/payment">
              <Payment></Payment>
            </PrivateRoute>
            <PrivateRoute path="/orders">
              <MyOrder></MyOrder>
            </PrivateRoute>
            <PrivateRoute path="/products/:id">
              <Purchase></Purchase>
            </PrivateRoute>
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
      </AuthProvider>
    </div>
  );
}

export default App;
