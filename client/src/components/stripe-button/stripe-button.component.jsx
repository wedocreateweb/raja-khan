import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;

  const publishableKey =
    "pk_test_51LiKtxAVQWrxtKEDCcKw8L2kwVKpmYP5SvFTrY8kqkKPLgrrsd4hL4N9bEQxhfUiYszRg5eHq7VBAC3qnkdLyjD500ekK5n6Rr";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((res) => {
        alert("Payment Successfull");
      })
      .catch((error) => {
        console.log("Payment error", JSON.parse(error));
        alert("There was an issue with your payment");
      });
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="RAJA KHAN Fabrics"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
