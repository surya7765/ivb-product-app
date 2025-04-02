import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material'
import './BuyNow.css'
import { useState } from 'react';

function BuyNow() {

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        


        let formData = {
            name: "",
            email: "",
            phone: "",
            upiId: "",
            flatNo: "",
            city: "",
            state: "",
            zipCode: "",
            isSameAddress: false
        }

        // Get the values from the form fields
        formData.name = e.target[0].value;
        formData.email = e.target[2].value;
        formData.phone = e.target[4].value;
        formData.upiId = e.target[6].value;
        formData.flatNo = e.target[8].value;
        formData.city = e.target[10].value;
        formData.state = e.target[12].value;
        formData.zipCode = e.target[14].value;
        formData.isSameAddress = e.target[16].checked;
        
        console.log(formData);






        console.log("Form submitted");
    }

  return (
    <div>
        <h1>Buy Now</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <h3>User Details</h3>
                <div id='success-snack-bar'></div>
                <div className='row form-group'>
                    <div className='col-md-6'>
                        <TextField className='buy-now-text' type="text" label="Name" placeholder="Enter your name" />
                    </div>
                    <div className='col-md-6'>
                        <TextField className='buy-now-text' type="email" label="Email" placeholder="Enter your email" />
                    </div>
                    <div className='col-md-6'>
                        <TextField className='buy-now-text' type="text" label="Phone No." placeholder="Enter your phone number" />
                    </div>
                    <div className='col-md-6'>
                        <TextField className='buy-now-text' type='text' label="UPI ID:" placeholder="Enter your UPI ID" />
                    </div>
                </div>
            </div>
            <div>
                <h3>Shipping Address</h3>
                <div className='row form-group'>
                    <div className='col-md-6'>
                        <TextField className='buy-now-text' type="text" label="Flat No./House No." placeholder="Enter your address" />
                    </div>
                    <div className='col-md-6'>
                        <TextField className='buy-now-text' type="text" label="City" placeholder="Enter your city" />
                    </div>
                    <div className='col-md-6'>
                        <TextField className='buy-now-text' type="text" label="State" placeholder="Enter your state" />
                    </div>
                    <div className='col-md-6'>
                        <TextField className='buy-now-text' type="text" label="ZIP code" placeholder="Enter your zip code" />
                    </div>
                </div>
            </div>
            <div>
                <FormControlLabel control={<Checkbox />} label="Shipping Address and Billing Address is Same?" />
            </div>
            <div>
                <Button variant="outlined" color="primary" type="submit" className='buy-now-button'>
                    Submit
                </Button>
            </div>
        </form>
    </div>
  )
}

export default BuyNow