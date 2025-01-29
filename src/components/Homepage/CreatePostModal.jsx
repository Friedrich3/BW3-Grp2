/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { token } from "../../redux/action";

const CreatePostModal = function (props) {
  const handleClose = () => props.setCreatePost(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const[postText,setPostText] = useState()


  const changeHandler = function (e){
    setPostText(e.target.value)
    if(e.target.value !== ''){
        setIsDisabled(false)
    }else{
        setIsDisabled(true)
    }
    }

    const handlePost = async function(){
        const urlPOSTpost = 'https://striveschool-api.herokuapp.com/api/posts/'
        try{
            const response = await fetch(urlPOSTpost,{
                method:'POST',
                headers:{
                    Authorization: token,
                    "Content-Type": "application/json",
                },
                body:JSON.stringify({text:postText})
            })
            if(response.ok){
                handleClose()
            }else{
                throw new Error('ERRORE')
            }
        }catch(error){
            console.log('ERRORE',error)
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
        
        <Button variant={`${isDisabled?'outline-secondary':'primary'}`} className='rounded-pill' disabled={isDisabled} onClick={handlePost}>
          Pubblica
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default CreatePostModal;
