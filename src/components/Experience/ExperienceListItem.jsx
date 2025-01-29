/* eslint-disable react/prop-types */
import { Button, Col, ListGroup, Row } from "react-bootstrap";
import { PencilFill, TrashFill } from "react-bootstrap-icons";
import { deleteExpAction, getExpAction } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";

const ExperienceListItem = function ({ item, calcoloDate, modificable }) {
  const profilo = useSelector((state) => {
    return state.profile.data;
  });
  const dispatch = useDispatch();

  return (
    <>
      <ListGroup.Item className="border-0 border-bottom container-fluid">
        <Row>
          <Col xs={2} lg={1}>
            <img
              src={item.image}
              alt=""
              className="rounded-circle"
              style={{ width: "50px" }}
            />
          </Col>
          <Col xs={8} lg={10} className="">
            <div className="d-flex flex-column">
              <h6>{item.role}</h6>
              <span>{item.company}</span>
              <small className="text-secondary">
                {`${item.startDate.slice(0, 7)} - ${item.endDate.slice(
                  0,
                  7
                )} - ${calcoloDate(item.startDate, item.endDate)}`}
              </small>
              <small className="text-secondary">{item.area}</small>
              <p className="mt-2">{item.description}</p>
            </div>
          </Col>
          <Col
            xs={2}
            lg={1}
            className="d-flex flex-column justify-content-around"
          >
            {modificable && (
              <>
                <Button
                  variant="outline-warning"
                  className=" align-text-top opacity-75"
                  onClick={() => {}}
                >
                  {/* TODO: AGGIUNGERE MODALE CON PUT PER CAMBIARNE IL CONTENUTO */}
                  <PencilFill color="black" size={30}></PencilFill>
                </Button>
                <Button
                  variant="outline-danger"
                  className="align-text-top opacity-75"
                  onClick={() => {
                    dispatch(deleteExpAction(profilo._id, item._id));

                    dispatch(getExpAction(profilo._id))
                  }}
                >
                  {/* TODO: AGGIUNGERE MODALE CON PUT PER CAMBIARNE IL CONTENUTO */}
                  <TrashFill color="black" size={30}></TrashFill>
                </Button>
              </>
            )}
          </Col>
        </Row>
      </ListGroup.Item>
    </>
  );
};
export default ExperienceListItem;
