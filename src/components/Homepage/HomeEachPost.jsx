/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, Card, Dropdown, DropdownButton } from "react-bootstrap";
import {
  Gear,
  HandThumbsUp,
  HandThumbsUpFill,
  PencilFill,
  Trash,
} from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { handleDeleteAction } from "../../redux/action";

const HomeEachPost = function (props) {
  const profilo = useSelector((state) => {
    return state.profile.data;
  });
  const [isLiked, setIsLiked] = useState(false);
  const dispatch = useDispatch();

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
                <Dropdown.Item onClick={() => {}}>
                  <PencilFill /> Modifica
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    dispatch(handleDeleteAction(props.element._id));
                    
                  }}
                >
                  <Trash /> Elimina
                </Dropdown.Item>
              </DropdownButton>
            )}
          </div>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Text>{props.element.text}</Card.Text>
        <hr color="secondary" />
        <div className="d-flex justify-content-around">
          <Button
            variant="transparent"
            className="text-black border-0 homepage-button"
            onClick={() => {
              setIsLiked(!isLiked);
            }}
          >
            {isLiked ? <HandThumbsUpFill /> : <HandThumbsUp />}
            Mi piace
          </Button>
          <Button
            variant="transparent"
            className="text-black border-0 homepage-button"
          >
            Commenta
          </Button>
          <Button
            variant="transparent"
            className="text-black border-0 homepage-button"
          >
            Condividi
          </Button>
          <Button
            variant="transparent"
            className="text-black border-0 homepage-button"
          >
            Inoltra
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};
export default HomeEachPost;
