import React, { useEffect, useState } from 'react';
import { addToLocalStorage, getStoredBreakTime } from '../../utilities/fakedb';
import profile from '../../images/profile.png';
import { RiUserLocationFill } from 'react-icons/ri';
import './Cart.css';

const Cart = ({ cart }) => {
  const [breakTime, setBreakTime] = useState(0);

  useEffect(() => {
    const storedBreakTime = getStoredBreakTime();
    setBreakTime(storedBreakTime);
  }, []);

  let exerciseTime = 0;
  for (const activity of cart) {
    exerciseTime = exerciseTime + activity.time;
  }

  const handleBreakTime = (e) => {
    setBreakTime(e.target.innerText);
    addToLocalStorage(e.target.innerText);
  };

  return (
    <div className="cart-details">
      <div className="user-info">
        <img src={profile} alt="" />
        <div>
          <strong>Md. Mahamudul Hasan</strong>

          <p>
            <RiUserLocationFill></RiUserLocationFill> Gopalganj, Bangladesh
          </p>
        </div>
      </div>

      <div className="user-details-info">
        <div>
          <p>
            <strong>68</strong>
            <span>kg</span>
          </p>
          <p>Weight</p>
        </div>
        <div>
          <p>
            <strong>5.4</strong>
            <span>inch</span>
          </p>
          <p>Height</p>
        </div>
        <div>
          <p>
            <strong>27</strong>
            <span>yrs</span>
          </p>
          <p>Age</p>
        </div>
      </div>

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
