import NavBar from "./components/navbar";
import Products from "./components/products";
import Home from "./components/home";
import Posts from "./components/posts";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
          <Switch>
            <Route path="/products/:id" component={ProductDetails} />
            <Route
              path="/products"
              render={(props) => <Products sortBy="newest" {...props} />}
            />
            <Route path="/posts/:year/:month" component={Posts} />
            <Route path="/admin" component={Dashboard} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
