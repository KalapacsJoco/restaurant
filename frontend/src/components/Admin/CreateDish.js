import React, { useState } from 'react';
import axios from 'axios';


function CreateDish() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('image', image);

    try {
        const response = await axios.post('http://localhost:8000/api/dishes', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
  
        // Sikeres hozzáadás esetén átirányítás vagy üzenet megjelenítése
        console.log('Étel sikeresen hozzáadva');
      } catch (error) {
        setError(error.message);
      }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form elemek */}
      <input type="text" placeholder="Név" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Leírás" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input type="text" placeholder="Ár" value={price} onChange={(e) => setPrice(e.target.value)} />
      {/* ... többi input */}
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button type="submit">Étel hozzáadása</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
}

export default CreateDish;