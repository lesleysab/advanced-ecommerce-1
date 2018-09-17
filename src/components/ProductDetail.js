import React from "react";

function ProductDetail(props) {
  function renderStars() {
    let stars = [];
    for (let i = 0; i < props.product.rating; i++) {
      stars.push(<span className="glyphicon glyphicon-star" />);
    }
    return stars;
  }

  // addToCart () {
  //   let cart= [];

  // }
  return (
    <div className="col-sm-4 col-lg-4 col-md-4">
      <div className="thumbnail">
        <img src="http://placehold.it/320x150" alt="" />
        <div className="caption">
          <h4 className="pull-right">{props.product.price}</h4>
          <h4>
            <a href="#">{props.product.name}</a>
          </h4>
          <p>{props.product.description}</p>

          <div className="ratings">
            <p className="pull-right">{props.product.reviews} reviews</p>
            <p>{renderStars()}</p>
            <button className="cart-button" onClick={props.addToCart}>
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
