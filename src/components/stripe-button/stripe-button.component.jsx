import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51HtborJrj7mbnO2UIGtKp6rtG4auKTT4GWxAlbiYzgErjyoPbEq5w0PIoMK0dfcCLSE1dcqMDacdFnvxd66hTqpw00A6nms2Le';

  const onToken = token => {
    console.log(token);
    alert('Payment successful');
  }
  return (
    <StripeCheckout 
      label='Pay Now'
      name='CROWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton;