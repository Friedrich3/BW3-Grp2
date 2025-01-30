/* eslint-disable react/prop-types */
import { ListGroup } from "react-bootstrap";
import { Linkedin } from "react-bootstrap-icons";

const JobsListItem = function ({ job }) {
  return (
    <>
      <ListGroup.Item className="border-0 border-bottom" key={job._id}>
        <h5>
          <a
            href={job.url}
            target="blank"
            className=" text-decoration-none"
            style={{ color: "rgba(0, 0, 255, 0.7)" }}
          >
            {job.title}
          </a>
        </h5>
        <p className="text-dark m-0">
          {job.company_name} -{" "}
          <small className="text-secondary">
            {job.job_type}&nbsp;{job.salary}
          </small>
        </p>
        <small className="text-secondary">
          {job.candidate_required_location}
        </small>
        <br />
        <small className="text-secondary">
          Candidati tramite <Linkedin color="blue" />
        </small>
      </ListGroup.Item>
    </>
  );
};
export default JobsListItem;
