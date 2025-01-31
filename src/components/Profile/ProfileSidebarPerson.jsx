import { useState } from "react";
import { Button, Card } from "react-bootstrap";

/* eslint-disable react/prop-types */
const ProfileSidebarPerson = function ({ profile }) {

    const [isAdded,setIsAdded] = useState(false)
  return (
    <>
      <div>
        <div className="d-flex align-items-center">
          <div>
            <img
              src={profile.image}
              alt=""
              className="rounded-5"
              style={{ width: "40px", height: "40px" }}
            />
          </div>

          <Card.Title className="">
            &nbsp; {profile.name} - {profile.surname}
          </Card.Title>
        </div>
        <p className="fw-medium text-secondary">{profile.title}</p>

        <Card.Text className="mb-2">{profile.bio.slice(0, 150)}</Card.Text>
        <div className="text-end">
          <Button
            variant={isAdded?'outline-danger':"outline-success"}
            className="justify-content-center btn-sm rounded"
            onClick={()=>{setIsAdded(!isAdded)}}
          >
            {isAdded? 'Rimuovi':'Aggiungi'}
          </Button>
        </div>
        <hr color="secondary"></hr>
      </div>
    </>
  );
};
export default ProfileSidebarPerson;
