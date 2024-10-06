import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dishes() {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/dishes');
        setDishes(response.data);
      } catch (error) {
        console.error('Error fetching dishes:', error);
      }
    };
    fetchDishes();
  }, []);


  return (
    <div>
      <h1 className=''>Ételek</h1>
      <ul>
        {dishes.map(dish => (
          <li key={dish.id}>
            <h2>{dish.name}</h2>
            <p>{dish.description}</p>
            <p>{dish.price} RON</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dishes;