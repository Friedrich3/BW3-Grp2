import { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import CreatePostModal from "./CreatePostModal";

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
                <Col xs={1}>
                    <img src={profilo.image} alt=""
                    style={{ width: "50px" }}
                    className=" rounded-circle"/>
                </Col>
                <Col xs={11}>
                    
          <Button variant="transparent" className="rounded-pill w-100 h-100 homepage-button border border-2 border-secondary text-start fw-medium text-secondary" onClick={()=>{setCreatePost(true)}}>Crea un Post</Button>
                </Col>
            </Row>
          
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
