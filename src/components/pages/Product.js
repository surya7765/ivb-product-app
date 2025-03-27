import React from "react";
import products from "../../models/products";
import { Button, Card } from "react-bootstrap";

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
            <div className="col-md-3 mt-3" key={product.id}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={product.image_url} />
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
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
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
