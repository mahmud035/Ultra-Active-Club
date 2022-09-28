import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
  let exerciseTime = 0;
  for (const activity of cart) {
    exerciseTime = exerciseTime + activity.time;
  }

  return (
    <div className="cart-details">
      <h4>
        Add A Break <span>(minutes)</span>
      </h4>
      <div className="break-minutes">
        <span>10</span>
        <span>20</span>
        <span>30</span>
        <span>40</span>
        <span>50</span>
      </div>

      <h3>Exercise Details</h3>
      <div className="exercise-details">
        <strong>Exercise Time</strong>
        <span className="text-muted">{exerciseTime} minutes</span>
      </div>
      <div className="divider"></div>

      <div className="break-times">
        <strong>Break Time</strong>
        <span className="text-muted">0 minutes</span>
      </div>
    </div>
  );
};

export default Cart;
