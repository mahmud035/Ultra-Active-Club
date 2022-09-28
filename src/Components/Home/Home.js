import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Cart from '../Cart/Cart';
import './Home.css';

const Home = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);

  return (
    <div className="home-container">
      <div className="activity-content-container">
        <h1>The Daily Burn</h1>
        <div className="activity-container">
          {activities.map((activity, index) => (
            <Activity key={index} activity={activity}></Activity>
          ))}
        </div>
      </div>
      <div className="cart-container">
        <Cart></Cart>
      </div>
    </div>
  );
};

export default Home;
