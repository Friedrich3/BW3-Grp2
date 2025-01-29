import { Button, Card } from "react-bootstrap";
import { useState, useEffect } from 'react';

const SideBarProfile = () => {

    const [profiles, setProfiles] = useState(null);

    async function getCardsProfile() {
        const endpoint = 'https://striveschool-api.herokuapp.com/api/profile/'
        const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk3NDU0YTE2ZjYzNTAwMTVmZWNiN2MiLCJpYXQiOjE3Mzc5NjY5MjIsImV4cCI6MTczOTE3NjUyMn0.APtaAFtP0PypOo5hfd4isz08vj_exXfml5SDPxQvOZ4'
        try {
            const response = await fetch(endpoint, {
                headers: {
                    "Authorization": token
                }
            })
            if (response.ok) {
                const data = await response.json();
                setProfiles(data);
            } else {
                throw new Error('Errore Fetch Profili')
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getCardsProfile();
    }, []);

    return (
        <> {profiles &&
            <Card >
                <Card.Body>
                    <h5>Persone che potresti conoscere</h5>
                    {profiles.map((profile, index) => {
                        if (index < 5) {
                            return (<div key={profile._id}>
                              <Card.Title className="h4">
                                   <img src={profile.image} alt="" className="rounded-5 w-14" />
                                   &nbsp; {profile.name} - {profile.surname}
                                </Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{profile.bio}</Card.Subtitle>
                                <Button variant="outline-primary" className="justify-content-center btn-sm rounded" >Aggiungi</Button>
                                <hr></hr>
                            </div>
                            )
                        }
                        return;
                    })}
                </Card.Body>
            </Card>
        }
        </>

    )
}

export default SideBarProfile;