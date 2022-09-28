import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Cart from '../Cart/Cart';
import './Home.css';

const Home = () => {
  const [activities, setActivities] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);

  const handleAddToList = (selectedActivity) => {
    const newCart = [...cart, selectedActivity];
    setCart(newCart);
  };

  return (
    <div className="home-container">
      <div className="activity-content-container">
        <div className="activity-container">
          {activities.map((activity, index) => (
            <Activity
              key={index}
              activity={activity}
              handleAddToList={handleAddToList}
            ></Activity>
          ))}
        </div>
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Home;
