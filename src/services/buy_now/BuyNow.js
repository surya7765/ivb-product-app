import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material'
import './BuyNow.css'
import { Fragment, useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function BuyNow() {
    
    let [formData, setFormData] = useState(
        {
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
    );

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpen(false);
    };

    const action = (
        <Fragment>
          <Button color="secondary" size="small" onClick={handleClose}>
            UNDO
          </Button>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </Fragment>
      );

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        

        setFormData({
            name: e.target[0].value,
            email: e.target[2].value,
            phone: e.target[4].value,
            upiId: e.target[6].value,
            flatNo: e.target[8].value,
            city: e.target[10].value,
            state: e.target[12].value,
            zipCode: e.target[14].value,
            isSameAddress: e.target[16].checked
        })
        console.log(formData);
        console.log("Form submitted");

        // Show the snackbar
        handleClick();
    }

  return (
    <div>
        <div id='succes-snack-bar'>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Form submitted successfully"
                action={action}
            />
        </div>
        <h1>Buy Now</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <h3>User Details</h3>
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