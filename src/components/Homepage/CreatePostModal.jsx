/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { getPostAction, token } from "../../redux/action";
import { useDispatch } from "react-redux";

const CreatePostModal = function (props) {
  const handleClose = () => props.setCreatePost(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [postText, setPostText] = useState();
  const dispatch = useDispatch();

  const [postImage, setPostImage] = useState(null);

  const changeHandler = function (e) {
    setPostText(e.target.value);
    if (e.target.value !== "") {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  const handlePost = async function () {
    const urlPOSTpost = "https://striveschool-api.herokuapp.com/api/posts/";
    try {
      const response = await fetch(urlPOSTpost, {
        method: "POST",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: postText }),
      });
      if (response.ok) {
        const data = await response.json();
        if (postImage) {
          imagePOST(data);
        }else{
          handleClose();
          dispatch(getPostAction());
        }
      } else {
        throw new Error("ERRORE");
      }
    } catch (error) {
      console.log("ERRORE", error);
    }
  };

  const imagePOST = async (data) => {
    const urlPOSTImage = `https://striveschool-api.herokuapp.com/api/posts/${data._id}`;
    const form = new FormData();
    form.set("post", postImage);
    try {
      const response = await fetch(urlPOSTImage, {
        method: "POST",
        headers: {
          Authorization: token,
        },
        body: form,
      });
      if(response.ok){
        handleClose();
        dispatch(getPostAction());
      }else{
        throw new Error("ERRORE POST immagine post")
      }
    } catch (error) {
      console.log(error);
    }
  };

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
              onChange={(e) => {
                changeHandler(e);
              }}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer className="d-flex">
        <input
          id="fileImput"
          type="file"
          name="post"
          accept="image/*"
          className="form-control"
          onChange={(e) => {
            setPostImage(e.target.files[0]);
          }}
        />
        <Button
          variant={`${isDisabled ? "outline-secondary" : "primary"}`}
          className="rounded-pill"
          disabled={isDisabled}
          onClick={handlePost}
        >
          Pubblica
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default CreatePostModal;
