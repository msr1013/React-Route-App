import NavBar from "./components/navbar";
import Products from "./components/products";
import Home from "./components/home";
import Posts from "./components/posts";
import NotFound from "./components/notFound";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
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
            <Route path="/not-found" component={NotFound} />
            <Route path="/posts/:year?/:month?" component={Posts} />
            <Route path="/admin" component={Dashboard} />
            <Redirect from="/messages" to="/posts" />
            <Route path="/" exact component={Home} />
            <Redirect to="not-found" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
