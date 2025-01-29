/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const CreatePostModal = function (props) {
  const handleClose = () => props.setCreatePost(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const[postText,setPostText] = useState('')


  const changeHandler = function (e){
    setPostText(e.target.value)
    if(e.target.value !== ''){
        console.log('pieno')
    }else{
        console.log('vuoto')
    }

    }
  

  return (
    <Modal show={true} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Scrivi il tuo Post</Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-0">
        <Form>
          <Form.Group className="mb-3">
            <Form.Control
              autoFocus
              as="textarea"
              className="rounded-0 border-0"
              value={postText}
              style={{
                width: "100%",
                height: "200px",
                textAlign: "left",
                verticalAlign: "top",
                outline: "none",
                boxShadow: "none",
              }}
              onChange={(e)=>{changeHandler(e)}}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" className="rounded-pill">
          Pubblica
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default CreatePostModal;
