import React from 'react'

function AddToCart() {

    // Get the products from the Local Storage
    const productsInCart = JSON.parse(localStorage.getItem("product")) || [];
    console.log(productsInCart);
    


  return (
    <div>
        
    </div>
  )
}

export default AddToCart