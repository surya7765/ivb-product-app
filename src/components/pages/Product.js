import React from "react";
import products from "../../models/products";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Product = () => {

  const handleClick = (id) => {
    // Add the product to the Local Storage
    // Try Catch - to handle the error
    // if the product is not found in the products array
    // then it will throw an error
    // and it will be caught in the catch block
    // and it will not break the application
    try {
      let product = products.find((product) => product.id === id);
      if (!product) {
        throw new Error("Product not found");
      }
      // Check if the product is already in the cart
      // increase the quantity of the product
      let productsInCart = JSON.parse(localStorage.getItem("product")) || [];
      let productInCart = productsInCart.find((item) => item.id === id);
      if (productInCart) {
        productInCart.quantity += 1;
      } else {
        productInCart = { ...product, quantity: 1 };
        productsInCart.push(productInCart);
      }
      // Update the Local Storage
      localStorage.setItem("product", JSON.stringify(productsInCart));
    } catch (error) {
      console.log("Product not found", error);
    }
    
  }
  
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
                  <Button variant="warning" onClick={() => handleClick(product.id)}>Add To Cart</Button> {" "}
                  <Button style={{ backgroundColor: "rgb(123, 78, 90)"}} disabled={product.stock === 0}>
                    <Link to={`/buy_now/${product.name}`} style={{color:"white", textDecoration: "none"}}>Buy Now</Link>
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



// Create a README file with details about your project
// with include versions - 0.0.1