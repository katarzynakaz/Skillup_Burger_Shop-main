import React from "react";
import "../../styles/orderDetails.scss";

const OrderDetails = () => {
  return (
    <div className="orderDetails">
      <main>
        <h1>Order Details</h1>
        <div>
          
            <h1>Status</h1>
            {/* Add content for Order Status, placed at, and Delivered At */}
            <p>
              <b>Order Status:</b> In Progress
            </p>
            <p>
              <b>Placed At:</b> January 15, 2023, 10:30 AM
            </p>
            <p>
              <b>Delivered At:</b> Not Delivered Yet
            </p>
         
        </div>
        <article>
          <h1>Payment</h1>
          <div>
            {/* Add content for Payment Method, Payment Reference, and Paid At */}
            <h4>
              <b>Payment Method:</b> Credit Card
            </h4>
            <h4>
              <b>Payment Reference:</b> 1234567890
            </h4>
            <h4>
              <b>Paid At:</b> January 15, 2023, 10:30 AM
            </h4>
          </div>
        </article>
      </main>
    </div>
  );
};

export default OrderDetails;
