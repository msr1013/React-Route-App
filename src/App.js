import NavBar from "./components/navbar";
import Products from "./components/products";
import Home from "./components/home";
import Posts from "./components/posts";
import "./App.css";
import { Route } from "react-router-dom";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
          <Route path="/products" component={Products} />
          <Route path="/posts" component={Posts} />
          {/* <Route path="/admin" component={Dashboard} /> */}
          <Route path="/" component={Home} />
        </div>
      </div>
    );
  }
}

export default App;
