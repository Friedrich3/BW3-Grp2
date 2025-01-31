import { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import CreatePostModal from "./CreatePostModal";
import { CalendarPlus, Image, Newspaper } from "react-bootstrap-icons";

const HomeNewPost = function () {

    const profilo = useSelector((state)=>{
        return state.profile.data
    })

    const[createPost,setCreatePost] = useState(false)

  return (
    <>
      <Card>
        <Card.Body className="container-fluid">
            <Row>
                <Col xs={2} className="text-center">
                    <img src={profilo.image} alt=""
                    style={{ width: "50px",height:'50px' }}
                    className=" rounded-circle"/>
                </Col>
                <Col xs={10} >
                    
          <Button variant="transparent" className="rounded-pill w-100 h-100 homepage-button border border-2 border-secondary text-start fw-medium text-secondary" onClick={()=>{setCreatePost(true)}}>Crea un Post</Button>
                </Col>
            </Row>
            <hr color="secondary"/>
            <div className="d-flex justify-content-around">
              <Button variant="transparent" className="homepage-button rounded-0 px-0 py-2 fw-medium"><Image color="#378FE9"/> Contenuti Multimediali</Button>
              <Button variant="transparent" className="homepage-button rounded-0 px-0 py-2 fw-medium"><CalendarPlus color="#C37D16"/> Evento</Button>
              <Button variant="transparent" className="homepage-button rounded-0 px-0 py-2 fw-medium"><Newspaper color="#E06847"/> Scrivi un articolo</Button>
            </div>
          
        </Card.Body>
      </Card>
      {
        createPost &&(
            <>
                <CreatePostModal profilo={profilo} setCreatePost={setCreatePost}/>
            </>
        )
      }
    </>
  );
};
export default HomeNewPost;
