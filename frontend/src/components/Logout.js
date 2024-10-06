import React from 'react';
import axios from 'axios'; // Vagy más HTTP kéréshez használt könyvtár

function Logout() {
  const handleLogout = () => {
    axios.post('http://127.0.0.1:8000/api/logout') // A backend logout endpointja
      .then(response => {
        // Sikeres kijelentkezés esetén átirányítás a login oldalra
        window.location.href = '/login';
      })
      .catch(error => {
        console.error('Hiba a kijelentkezés során:', error);
      });
  };

  return (
    <div>
      <button onClick={handleLogout}>Kijelentkezés</button>
    </div>
  );
}

export default Logout;