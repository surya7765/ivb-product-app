import React from "react";
import products from "../../models/products";
import { Button, Card } from "react-bootstrap";

const Product = () => {
  return (
    <div>
      <h1 style={{backgroundColor: 'rgb(123, 78, 90)', marginTop: '5vh' }}>Our Products</h1>
      <div className="products">
        {/* map - to iterate over products data */}
        {products.map((product) => (
          <div>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};



export default Product;