import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 
    'pk_test_51H59sZKeMdSlo8MZK7XpcHkk5YyXuTUEfzmyihheBwSlUUtV0IE7LxUhIXC21oPYgZvbtxjoxXRKecqVX0OsnWaU00rx4e9zLG';

    const onToken = token => {
        console.log(token);
        alert('Payment Succesful')
    };

    return (
        <StripeCheckout
          label='Pay Now'
          name='CRWN clothing Ltd.'
          billingAddress
          shippingAddress
          image='https://svgshare.com/i/CUz.svg'
          description={`Your total is $${price}`}
          amount={priceForStripe}
          panelLabel='Pay Now'
          token={onToken}
          stripeKey={publishableKey}
         />
    );
};

export default StripeCheckoutButton;