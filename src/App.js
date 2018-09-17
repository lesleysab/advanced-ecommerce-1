import React from "react";
import "./App.css";
import Header from "./components/Header";
import ProductDetail from "./components/ProductDetail";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";

function App(props) {
  return (
    <div className="App">
      <Header />

      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <p className="lead">Shop Name</p>
            <div className="list-group">
              <a href="#" className="list-group-item">
                Category 1
              </a>
              <a href="#" className="list-group-item">
                Category 2
              </a>
              <a href="#" className="list-group-item">
                Category 3
              </a>
            </div>
          </div>

          <div className="col-md-9">
            <Carousel />

            <div className="row">
              {props.products.map(product => (
                <ProductDetail product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <hr />

        <Footer />
      </div>
    </div>
  );
}

export default App;
