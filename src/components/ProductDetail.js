import React from "react";

function ProductDetail(props) {
  //   renderStars(product) {
  //     if (product.rating === 1) {
  //       return (
  //         <p>
  //           <span className="glyphicon glyphicon-star" />
  //           <span className="glyphicon glyphicon-star-empty" />
  //           <span className="glyphicon glyphicon-star-empty" />
  //           <span className="glyphicon glyphicon-star-empty" />
  //           <span className="glyphicon glyphicon-star-empty" />
  //         </p>
  //       );
  //     } else if (product.rating === 2) {
  //       return (
  //         <p>
  //           <span className="glyphicon glyphicon-star" />
  //           <span className="glyphicon glyphicon-star" />
  //           <span className="glyphicon glyphicon-star-empty" />
  //           <span className="glyphicon glyphicon-star-empty" />
  //           <span className="glyphicon glyphicon-star-empty" />
  //         </p>
  //       );
  //     } else if (product.rating === 3) {
  //       return (
  //         <p>
  //           <span className="glyphicon glyphicon-star" />
  //           <span className="glyphicon glyphicon-star" />
  //           <span className="glyphicon glyphicon-star" />
  //           <span className="glyphicon glyphicon-star-empty" />
  //           <span className="glyphicon glyphicon-star-empty" />
  //         </p>
  //       );
  //     } else if (product.rating === 4) {
  //       return (
  //         <p>
  //           <span className="glyphicon glyphicon-star" />
  //           <span className="glyphicon glyphicon-star" />
  //           <span className="glyphicon glyphicon-star" />
  //           <span className="glyphicon glyphicon-star" />
  //           <span className="glyphicon glyphicon-star-empty" />
  //         </p>
  //       );
  //     } else if (product.rating === 5) {
  //       return (
  //         <p>
  //           <span className="glyphicon glyphicon-star" />
  //           <span className="glyphicon glyphicon-star" />
  //           <span className="glyphicon glyphicon-star" />
  //           <span className="glyphicon glyphicon-star" />
  //           <span className="glyphicon glyphicon-star" />
  //         </p>
  //       );
  //     }
  //   }

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
        </div>
        <div className="ratings">
          <p className="pull-right">{props.product.reviews} reviews</p>
          {/* <p>{this.renderStars(product)}</p> */}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
