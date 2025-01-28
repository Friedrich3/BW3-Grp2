import { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
const ProfileUserEx = () => {
  const [experience, setExperience] = useState(null);
  const [userId, setUserId] = useState("5d925e677360c41e0046d1f5");

  useEffect(() => {
    // Funzione per recuperare l'esperienza lavorativa

    fetchExperience();
  }, [userId]);

  const fetchExperience = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`,
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk4YTc1OThlOWNjZDAwMTUyMGFiN2MiLCJpYXQiOjE3MzgwNTc1NjIsImV4cCI6MTczOTI2NzE2Mn0.KahcHlJaSY_jDvdfr4tI8F-XfK7SwPm4fCu5DFrQwSE", // Sostituisci con il tuo token
          },
        }
      );
      const data = await response.json();
      setExperience(data[0]); // Supponiamo che ci sia almeno una "esperienza"
    } catch (error) {
      console.error("Errore nel recupero delle esperienze:", error);
    }
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default ProfileUserEx;
