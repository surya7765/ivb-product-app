import { Card } from 'react-bootstrap';
import React from 'react'

function AddToCart() {

    // Get the products from the Local Storage
    const productsInCart = JSON.parse(localStorage.getItem("product")) || [];
    console.log(productsInCart);


  return (
    <div>
        {!productsInCart 
            ? <div>No Products In Cart</div> 
            : <div>
                {productsInCart.map((product) => (
                    <div>
                        <Card style={{ width: "20rem", height: "30rem" }} key={product.id}>
                            <Card.Img variant="top" style={{height:"18rem"}} src={product.image_url} />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>
                                    Price: {product.price}
                                    Quantity: {product.quantity}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
                <h3>Cart Value</h3>
                <h4>Total: {productsInCart.map((product) => parseInt(product.quantity) * parseInt(product.price))}</h4>
              </div>
        }
    </div>
  )
}

export default AddToCart