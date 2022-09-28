import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Cart from '../Cart/Cart';
import './Home.css';

const Home = () => {
  const [activities, setActivities] = useState([]);
  const [cart, setCart] = useState([]);
  const [position, setPosition] = useState('top-center');

  useEffect(() => {
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);

  const handleAddToList = (selectedActivity) => {
    const newCart = [...cart, selectedActivity];
    setCart(newCart);
  };

  // const handleToastPosition = () => {
  //   setPosition('top-center');
  // };

  return (
    <div className="home-container">
      <div className=" activity-content-container">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 activity-container">
            {activities.map((activity, index) => (
              <Activity
                key={index}
                activity={activity}
                handleAddToList={handleAddToList}
              ></Activity>
            ))}
          </div>
        </div>
      </div>

      <div className="cart-container">
        <Cart cart={cart} position={position}></Cart>
      </div>
    </div>
  );
};

export default Home;
