import React, { useEffect, useState } from 'react';
import { addToLocalStorage, getStoredBreakTime } from '../../utilities/fakedb';
import profile from '../../images/profile.png';
import { RiUserLocationFill } from 'react-icons/ri';
import './Cart.css';
import ReactToast from '../ReactToast/ReactToast';

const Cart = ({ cart, position }) => {
  const [breakTime, setBreakTime] = useState(0);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const storedBreakTime = getStoredBreakTime();
    setBreakTime(storedBreakTime);
  }, []);

  let exerciseTime = 0;
  for (const activity of cart) {
    exerciseTime = exerciseTime + activity.time;
  }

  const handleBreakTime = (e, spanNum) => {
    setBreakTime(e.target.innerText);
    addToLocalStorage(e.target.innerText);

    handleClick(spanNum);
  };

  const handleClick = (spanNum) => {
    setSelected(spanNum);
  };

  return (
    <div className="cart-details">
      <div className="user-info">
        <img src={profile} alt="" />
        <div>
          <strong>Md. Mahamudul Hasan</strong>

          <p>
            <RiUserLocationFill className="location-icon"></RiUserLocationFill>
            Gopalganj, Bangladesh
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
        <span
          onClick={(e) => handleBreakTime(e, 1)}
          className={selected === 1 ? 'active' : ''}
        >
          10
        </span>
        <span
          onClick={(e) => handleBreakTime(e, 2)}
          className={selected === 2 ? 'active' : ''}
        >
          20
        </span>
        <span
          onClick={(e) => handleBreakTime(e, 3)}
          className={selected === 3 ? 'active' : ''}
        >
          30
        </span>
        <span
          onClick={(e) => handleBreakTime(e, 4)}
          className={selected === 4 ? 'active' : ''}
        >
          40
        </span>
        <span
          onClick={(e) => handleBreakTime(e, 5)}
          className={selected === 5 ? 'active' : ''}
        >
          50
        </span>
      </div>

      <h3>Exercise Details</h3>
      <div className="exercise-details">
        <strong>Exercise Time</strong>
        <span>{exerciseTime} minutes</span>
      </div>
      <div className="divider"></div>

      <div className="break-times">
        <strong>Break Time</strong>
        <span>{breakTime} minutes</span>
      </div>

      <ReactToast position={position}></ReactToast>
    </div>
  );
};

export default Cart;
