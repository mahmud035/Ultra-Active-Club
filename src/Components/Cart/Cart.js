import React, { useState } from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
  const [breakTime, setBreakTime] = useState('');

  let exerciseTime = 0;
  for (const activity of cart) {
    exerciseTime = exerciseTime + activity.time;
  }

  const handleBreakTime = (e) => {
    setBreakTime(e.target.innerText);
  };

  return (
    <div className="cart-details">
      <h4>
        Add A Break <span>(minutes)</span>
      </h4>
      <div className="break-minutes">
        <span onClick={(e) => handleBreakTime(e)}>10</span>
        <span onClick={(e) => handleBreakTime(e)}>20</span>
        <span onClick={(e) => handleBreakTime(e)}>30</span>
        <span onClick={(e) => handleBreakTime(e)}>40</span>
        <span onClick={(e) => handleBreakTime(e)}>50</span>
      </div>

      <h3>Exercise Details</h3>
      <div className="exercise-details">
        <strong>Exercise Time</strong>
        <span className="text-muted">{exerciseTime} minutes</span>
      </div>
      <div className="divider"></div>

      <div className="break-times">
        <strong>Break Time</strong>
        <span className="text-muted">{breakTime} minutes</span>
      </div>
    </div>
  );
};

export default Cart;
