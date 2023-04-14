import React, { useState, useEffect } from "react";

const FoodListPage = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [filterType, setFilterType] = useState("All");
  const [filterDeliveryTime, setFilterDeliveryTime] = useState("");

  useEffect(() => {
    const storedFoodItems = JSON.parse(localStorage.getItem("foodItems"));
    if (storedFoodItems) {
      setFoodItems(storedFoodItems);
    }
  }, []);

  const handleFilterTypeChange = (event) => {
    setFilterType(event.target.value);
  };

  const handleFilterDeliveryTimeChange = (event) => {
    setFilterDeliveryTime(event.target.value);
  };

  const filteredFoodItems = foodItems.filter((foodItem) => {
    if (filterType === "All" || foodItem.type === filterType) {
      if (filterDeliveryTime === "" || foodItem.deliveryTime <= filterDeliveryTime) {
        return true;
      }
    }
    return false;
  });

  return (
    <div>
      <h1>Food List</h1>
      <div>
        <label htmlFor="filter-type">Filter by Type:</label>
        <select id="filter-type" value={filterType} onChange={handleFilterTypeChange}>
          <option value="All">All</option>
          <option value="Pizza">Pizza</option>
          <option value="Burger">Burger</option>
          <option value="Taco">Taco</option>
        </select>
      </div>
      <div>
        <label htmlFor="filter-delivery-time">Filter by Max Delivery Time:</label>
        <input
          type="number"
          id="filter-delivery-time"
          value={filterDeliveryTime}
          onChange={handleFilterDeliveryTimeChange}
        />
      </div>
      <ul>
        {filteredFoodItems.map((foodItem) => (
          <li key={foodItem.id}>
            <div>{foodItem.name}</div>
            <div>{foodItem.type}</div>
            <div>{foodItem.deliveryTime} minutes</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodListPage;
