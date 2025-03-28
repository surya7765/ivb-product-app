import React from "react";
import products from "../../models/products";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <h1 style={{ backgroundColor: "rgb(123, 78, 90)", marginTop: "5vh" }}>
        Our Products
      </h1>
      <div className="container">
        <div className="products row">
          {/* map - to iterate over products data */}
          {products.map((product) => (
            <div className="col-md-4 col-lg-3 mt-3" key={product.id}>
              <Card style={{ width: "20rem", height: "30rem" }}>
                <Card.Img variant="top" style={{height:"18rem"}} src={product.image_url} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>
                    Price:{" "}
                    <span style={{ color: "darkmagenta" }}>
                      {product.price}
                    </span>{" "}
                    <br />
                    Stock:{" "}
                    {product.stock > 0 ? (
                      <span style={{ color: "green" }}>{product.stock}</span>
                    ) : (
                      <span style={{ color: "red" }}>Out of Stock</span>
                    )}
                    {/* <p>{`${product.desc.substring(0,50)}...`}</p> */}
                  </Card.Text>
                  <Button variant="warning">Add To Cart</Button> {" "}
                  <Button style={{ backgroundColor: "rgb(123, 78, 90)"}}>
                    <Link to={`/buy_now`} style={{color:"white"}}>Buy Now</Link>
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
