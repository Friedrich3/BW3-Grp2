/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, Card, Dropdown, DropdownButton, Form } from "react-bootstrap";
import { Gear, HandThumbsUp, HandThumbsUpFill, PencilFill, Trash } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { getPostAction, handleDeleteAction, token } from "../../redux/action";

const HomeEachPost = function (props) {
  const profilo = useSelector((state) => state.profile.data);
  const [isLiked, setIsLiked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(props.element.text);
  const dispatch = useDispatch();

  //DAFIXARE IN CASO
  // const handleSave = () => {
  //   dispatch(handleUpdateAction(props.element._id, editedText, props.element)); // Azione Redux per aggiornare il post
  //   setIsEditing(false);
  // };

  const handleSave = async ()=>{
    try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/posts/${props.element._id}`, {
              method: "PUT",
              headers: { "Content-Type": "application/json" ,"Authorization": token},
              body: JSON.stringify({...props.element,
                                      text: editedText }),
            });
            if (response.ok){
              setIsEditing(false)
                dispatch(getPostAction())
            }else{
             throw new Error("Errore nell'aggiornamento");
             } 
          } catch (error) {
            console.error("Errore:", error);
          }
  }

  return (
    <Card className="mb-1">
      <Card.Header>
        <div className="d-flex align-items-center">
          <img
            src={props.element.user.image}
            alt=""
            style={{ width: "40px", height: "40px" }}
            className="rounded-circle me-2"
          />
          <div>
            <h6 className="mb-0">
              {props.element.user.name} {props.element.user.surname}{" "}
              <small className="text-secondary">@{props.element.username}</small>
            </h6>
            <small className="text-secondary">{props.element.user.title}</small>
          </div>
          <div className="ms-auto">
            {profilo._id === props.element.user._id && (
              <DropdownButton variant="light" title={<Gear />}>
                <Dropdown.Item onClick={() => setIsEditing(true)}>
                  <PencilFill /> Modifica
                </Dropdown.Item>
                <Dropdown.Item onClick={() => dispatch(handleDeleteAction(props.element._id))}>
                  <Trash /> Elimina
                </Dropdown.Item>
              </DropdownButton>
            )}
          </div>
        </div>
      </Card.Header>
      <Card.Body>
        {isEditing ? (
          <>
            <Form.Control
              as="textarea"
              rows={3}
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
            />
            <div className="d-flex justify-content-end mt-2">
              <Button variant="secondary" className="me-2" onClick={() => setIsEditing(false)}>
                Annulla
              </Button>
              <Button variant="primary" onClick={handleSave}>
                Salva
              </Button>
            </div>
          </>
        ) : (
          <Card.Text>{props.element.text}</Card.Text>
        )}
        <hr color="secondary" />
        <div className="d-flex justify-content-around">
          <Button variant="transparent" className="text-black border-0 homepage-button" onClick={() => setIsLiked(!isLiked)}>
            {isLiked ? <HandThumbsUpFill /> : <HandThumbsUp />}
            Mi piace
          </Button>
          <Button variant="transparent" className="text-black border-0 homepage-button">Commenta</Button>
          <Button variant="transparent" className="text-black border-0 homepage-button">Condividi</Button>
          <Button variant="transparent" className="text-black border-0 homepage-button">Inoltra</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default HomeEachPost;
