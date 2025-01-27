import { Card } from "react-bootstrap";
import { getDataAction } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const ProfileCardsSideBar = () => {
   const dispatch = useDispatch()
   const profilo = useSelector((state)=>{ return state.profile.data})
    
     useEffect(()=>{
                dispatch(getDataAction()) 
        // eslint-disable-next-line react-hooks/exhaustive-deps
        },[])

    return (
        <>
          <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Lingua del Profilo</Card.Title>
                    {/*INSERIRE FETCH LINGUA DEL PROFILO SOPRA AL RETURN */}
                    <Card.Subtitle className="mb-2 text-muted">{profilo.email}</Card.Subtitle>
                    <hr></hr>
                    <Card.Title>Profilo Pubblico e URL</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{profilo.name}</Card.Subtitle>
                </Card.Body>
            </Card>
         
        </>
    )

};

export default ProfileCardsSideBar;