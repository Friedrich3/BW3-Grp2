/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Form,
  Row,
} from "react-bootstrap";
import {
  Gear,
  HandThumbsUp,
  HandThumbsUpFill,
  PencilFill,
  ThreeDots,
  Trash,
} from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { getAllCommentsAction, getPostAction, handleDeleteAction, postCommentAction, token } from "../../redux/action";

const HomeEachPost = function (props) {
  const allComments = useSelector((state) => {
    return state.comments.data;
  });

  const profilo = useSelector((state) => state.profile.data);
  const [isLiked, setIsLiked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(props.element.text);

  const [isComment, setIsComment] = useState(false);
  const [postComments, setPostComments] = useState([]);
  const [commento,setCommento] = useState('')
  const dispatch = useDispatch();

  //DAFIXARE IN CASO
  // const handleSave = () => {
  //   dispatch(handleUpdateAction(props.element._id, editedText, props.element)); // Azione Redux per aggiornare il post
  //   setIsEditing(false);
  // };
  

  useEffect(() => {
    setPostComments(
      allComments.filter((comment) => {
        return comment.elementId === props.element._id;
      })
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allComments]);

  const handleSave = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${props.element._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json", Authorization: token },
          body: JSON.stringify({ ...props.element, text: editedText }),
        }
      );
      if (response.ok) {
        setIsEditing(false);
        dispatch(getPostAction());
      } else {
        throw new Error("Errore nell'aggiornamento");
      }
    } catch (error) {
      console.error("Errore:", error);
    }

  };

  const handleCommentSubmit =  (e) =>{
    e.preventDefault()
    dispatch(postCommentAction(commento ,props.element._id))
    setCommento('')
    dispatch(getAllCommentsAction())
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
              <small className="text-secondary">
                @{props.element.username}
              </small>
            </h6>
            <small className="text-secondary">{props.element.user.title}</small>
          </div>
          <div className="ms-auto">
            {profilo._id === props.element.user._id && (
              <DropdownButton variant="light" title={<Gear />}>
                <Dropdown.Item onClick={() => setIsEditing(true)}>
                  <PencilFill /> Modifica
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() =>
                    dispatch(handleDeleteAction(props.element._id))
                  }
                >
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
              <Button
                variant="secondary"
                className="me-2"
                onClick={() => setIsEditing(false)}
              >
                Annulla
              </Button>
              <Button variant="primary" onClick={handleSave}>
                Salva
              </Button>
            </div>
          </>
        ) : (
          <div className=" card-text">
            <div>{props.element.text}</div>
            {props.element.image && (
              <div className="border">
                <img
                  src={props.element.image}
                  alt=""
                  className="img-fluid"
                  style={{ minWidth: "100%", maxHeight: "500px" }}
                />
              </div>
            )}
          </div>
        )}
        <hr color="secondary" />
        <div className="d-flex justify-content-around">
          <Button
            variant="transparent"
            className="text-black border-0 homepage-button"
            onClick={() => setIsLiked(!isLiked)}
          >
            {isLiked ? <HandThumbsUpFill /> : <HandThumbsUp />}
            Mi piace
          </Button>
          <Button
            variant="transparent"
            className="text-black border-0 homepage-button"
            onClick={() => {
              setIsComment(!isComment);
            }}
          >
            <ChatText /> Commenta
          </Button>
          <Button
            variant="transparent"
            className="text-black border-0 homepage-button"
          >
            <BiShuffle /> Condividi
          </Button>
          <Button
            variant="transparent"
            className="text-black border-0 homepage-button"
          >
            <SendArrowDown /> Inoltra
          </Button>

        </div>

        <Container>
          <Row className={isComment ? "my-1 mb-3 bg-light rounded-4 align-items-center" : " "}>
            {isComment && (
              <>
                <Col xs={1}>
                  <img
                    src={profilo.image}
                    alt=""
                    style={{ width: "30px" }}
                    className="rounded-circle"
                  />
                </Col>
                <Col xs={11} className="p-0 ps-2">
                <Form onSubmit={handleCommentSubmit}>
                  <input
                    type="text"
                    placeholder="Scrivi un commento..."
                    className="rounded-4 py-2 w-100 h-100 homepage-button border border-black text-start fw-medium text-secondary"
                    value={commento}
                    onChange={(e)=>{
                      setCommento(e.target.value)
                    }}
                    />
                    </Form>
                </Col>
              </>
            )}
          </Row>

          {isComment &&

            postComments &&
            postComments.map((element) => {
              return (
                <Row key={element._id} className=" bg-light rounded-4 mb-2">
                  <Col xs={1}>
                    <img
                      src="https://placecats.com/30/30"
                      alt=""
                      style={{ width: "30px" }}
                      className="rounded-circle"
                    />
                  </Col>
                  <Col xs={10}>
                    <h6 className="m-0">{element.author}</h6>
                    <span>{element.comment}</span>
                  </Col>
                  <Col
                    xs={1}
                    className="d-flex justify-content-center align-items-top"
                  >
                    <Button variant="transparent">
                      <ThreeDots />
                    </Button>
                  </Col>
                </Row>
              );
            })
            }
        </Container>
      </Card.Body>
    </Card>
  );
};

export default HomeEachPost;
