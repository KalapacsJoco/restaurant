import React, { useState } from 'react';
import axios from 'axios';



function Register() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    phone: '',
    street: '',
    street_number: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:8000/api/register', formData);
      if (response.data['user']['token']) {
        const token = response.data['user']['token']; // Declare token here
        console.log('minden fasza')
        localStorage.setItem('token', token);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Regisztráció</h1>
      <form onSubmit={handleSubmit}>
        <input
          className='bg-red'
          type="text"
          name="first_name"
          placeholder="Vezetéknév"
          value={formData.first_name}
          onChange={handleChange}
        /> <br></br>
        <input
          type="text"
          name="last_name"
          placeholder="Keresztnév"
          value={formData.last_name}
          onChange={handleChange}
        /> <br></br>
        <input
          type="text"
          name="email"
          placeholder="Email cím"
          value={formData.email}
          onChange={handleChange}
        /> <br></br>
        <input
          type="password"
          name="password"
          placeholder="Jelszó"
          value={formData.password}
          onChange={handleChange}
        /> <br></br>
        <input
          type="password"
          name="password_confirmation"
          placeholder="Jelszó újra"
          value={formData.passwordConfirmation}
          onChange={handleChange}
        /> <br></br>
        <input
          type="text"
          name="phone"
          placeholder="Telefonszám"
          value={formData.phone}
          onChange={handleChange}
        /> <br></br>
        <input
          type="text"
          name="street"
          placeholder="Utca"
          value={formData.street}
          onChange={handleChange}
        /> <br></br>
        <input
          type="text"
          name="street_number"
          placeholder="Házszám"
          value={formData.street_number}
          onChange={handleChange}
        /> <br></br>
        {/* Hasonlóképpen a többi input elem is */}
        <button type="submit">Regisztráció</button>
      </form>
    </div>
  );
}

export default Register;