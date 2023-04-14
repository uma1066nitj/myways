import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const CreateFoodPage = () => {
  const history = useHistory();
  const [foodName, setFoodName] = useState('');
  const [foodType, setFoodType] = useState('');
  const [maxDeliveryTime, setMaxDeliveryTime] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const foodData = {
      foodName,
      foodType,
      maxDeliveryTime
    };
    localStorage.setItem('foodData', JSON.stringify(foodData));
    // history.push('/food-list');
  };

  return (
    <div>
      <h2>Create Food</h2>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="foodName">Food Name:</label>
        <input
          type="text"
          id="foodName"
          value={foodName}
          onChange={(event) => setFoodName(event.target.value)}
        />
        <br />
        <label htmlFor="foodType">Food Type:</label>
        <select
          id="foodType"
          value={foodType}
          onChange={(event) => setFoodType(event.target.value)}
        >
          <option value="">Select food type</option>
          <option value="pizza">Pizza</option>
          <option value="hamburger">Hamburger</option>
          <option value="sushi">Sushi</option>
        </select>
        <br />
        <label htmlFor="maxDeliveryTime">Max Delivery Time (in minutes):</label>
        <input
          type="number"
          id="maxDeliveryTime"
          value={maxDeliveryTime}
          onChange={(event) => setMaxDeliveryTime(event.target.value)}
        />
        <br />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateFoodPage;
