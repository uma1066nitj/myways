import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import FoodForm from './pages/CreateFoodPage';
import FoodList from './pages/FoodListPage';

function App() {
  const [foodList, setFoodList] = useState([]);

  const handleAddFood = (food) => {
    setFoodList([...foodList, food]);
  };

  const handleClearFood = () => {
    setFoodList([]);
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Create Food Item</Link>
            </li>
            <li>
              <Link to="/food-list">View Food List</Link>
            </li>
          </ul>
        </nav>

        <Route exact path="/">
          <FoodForm onAddFood={handleAddFood} />
        </Route>

        <Route path="/food-list">
          <FoodList
            foodList={foodList}
            onClearFood={handleClearFood}
          />
        </Route>
      </div>
    </Router>
  );
}

export default App;
