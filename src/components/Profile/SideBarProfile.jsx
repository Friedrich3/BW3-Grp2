import { Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import ProfileSidebarPerson from "./ProfileSidebarPerson";

const SideBarProfile = () => {
  const [profiles, setProfiles] = useState(null);

  async function getCardsProfile() {
    const endpoint = "https://striveschool-api.herokuapp.com/api/profile/";
    const token =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk3NDU0YTE2ZjYzNTAwMTVmZWNiN2MiLCJpYXQiOjE3Mzc5NjY5MjIsImV4cCI6MTczOTE3NjUyMn0.APtaAFtP0PypOo5hfd4isz08vj_exXfml5SDPxQvOZ4";
    try {
      const response = await fetch(endpoint, {
        headers: {
          Authorization: token,
        },
      });
      if (response.ok) {
        const data = await response.json();
        shuffleArray(data);
        //setProfiles(data);
      } else {
        throw new Error("Errore Fetch Profili");
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCardsProfile();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const shuffleArray = function (array) {
    if (array.length === 0) {
      return [];
    }
    const shuffled = [...array].sort(() => Math.random() - 0.5);
    //NUMERO DI ELEMENTI CHE DEVE PASSARE
    setProfiles(shuffled.slice(0, Math.min(5, array.length)));
  };

  return (
    <>
      {" "}
      {profiles && (
        <Card className="mt-3">
          <Card.Body>
            <h5>Persone che potresti conoscere</h5>
            {profiles.length > 0 &&
              profiles.map((profile, index) => {
                if (index < 5) {
                  return (
                    
                    <ProfileSidebarPerson profile={profile} key={profile._id} />
                  );
                }
                return;
              })}
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default SideBarProfile;
