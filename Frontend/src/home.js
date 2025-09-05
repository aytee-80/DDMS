import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api/message")
    .then((res) => res.json())
    .then((data) => setMessage(data.text))
    .catch((err) => console.error("Error fetching message:", err));
  },[]);

  return (
    <div>
      <h1>Message from Backend:</h1>
      <p>{message} Voice to tet</p>
      <Link to="/voice">Voice to Text</Link>
    </div>
  );
}  