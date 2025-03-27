import React from 'react'

function BuyNow() {
  return (
    <div>
        <h1>Buy Now</h1>
        <form>
            <div>
                <h3>User Details</h3>
                <div className='row form-group'>
                    <div>
                        <label>Name: </label>
                        <input type="text" placeholder="Enter your name" />
                    </div>
                    <div>
                        <label>Email: </label>
                        <input type="email" placeholder="Enter your email" />
                    </div>
                </div>
            </div>
        </form>
    </div>
  )
}

export default BuyNow