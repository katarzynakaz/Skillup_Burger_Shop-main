import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import {OrderDetails} from './OrderDetails'

const MyOrders = () => {
  const arr = [1, 2, 3, 4];
  console.log("orders component ")

  return (
    <section className="tableClass">
      <main>
        <table>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Status</th>
              <th>Item Qty</th>
              <th>Amount</th>
              <th>Payment Method</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
{/* //     Add the code for the table body and figute out how to get data in */}
               
            {arr.map(orderId => (
              <tr key={orderId}>
                <td>{orderId}</td>
                <td>Status Placeholder</td>
                <td>Item Qty Placeholder</td>
                <td>Amount Placeholder</td>
                <td>Payment Method Placeholder</td>
                <td>
                <Link to={`/order/${orderId}`}>
                <AiOutlineEye />
                </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </section>
  );
};

export default MyOrders;
