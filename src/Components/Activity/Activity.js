import React from 'react';
import './Activity.css';

const Activity = ({ activity, handleAddToList }) => {
  const { name, picture, time, about } = activity;

  return (
    <div className="col d-flex justify-content-center ">
      <div className="activity-card">
        <img src={picture} alt="" />
        <div className="activity-card-body">
          <h3>{name}</h3>
          <p>{about ? about.slice(0, 50) : 'Not available'}</p>
          <p>
            Required Time: <strong>{time} minutes</strong>
          </p>
          <button
            onClick={() => handleAddToList(activity)}
            className="btn-add-to-list"
          >
            Add to list
          </button>
        </div>
      </div>
    </div>
  );
};

export default Activity;
