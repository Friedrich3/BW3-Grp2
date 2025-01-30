import { useEffect, useState } from "react";
import {
  Button,
  Card,
  Collapse,
  Container,
  ListGroup,
  Row,
} from "react-bootstrap";
import { ArrowDown, ArrowDownSquare, Linkedin, Search, X } from "react-bootstrap-icons";

const categories = [
  "Data",
  "Finance / Legal",
  "Product",
  "Marketing",
  "Customer Service",
  "Software Development",
  "DevOps / Sysadmin",
  "Human Resources",
  "All others",
];

const JobsMain = function () {
  const [isSuggestOpen, setIsSuggestOpen] = useState(true);
  const [isSuggestVisible, setIsSuggestVisible] = useState(false);
  const [suggestList, setSuggestList] = useState([]);

  useEffect(()=>{
    handleFetch()
  },[])

  const handleFetch = async function (category = "All others") {
    setIsSuggestVisible(false);
    const urlGETcategory = `https://strive-benchmark.herokuapp.com/api/jobs?category=${category}&limit=3`;
    try {
      const response = await fetch(urlGETcategory, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        setSuggestList(data.data);
        setIsSuggestVisible(true);
      } else {
        throw new Error("ERRORE FETCH CATEGORIA");
      }
    } catch (error) {
      console.log("ERRORE", error);
    }
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Card>
            <div>
              <div className="d-flex justify-content-between">
                <h5></h5>
                <Button
                  variant="transparent"
                  className="border-0"
                  onClick={() => setIsSuggestOpen(!isSuggestOpen)}
                  aria-controls="example-collapse-text"
                  aria-expanded={isSuggestOpen}
                >
                  {isSuggestOpen ? <X size={20} /> : <ArrowDown size={20} />}
                </Button>
              </div>
              <div className="d-flex flex-wrap">
                {categories.map((category, index) => {
                  return (
                    <Button
                      key={index}
                      className="rounded-pill mb-1 me-1"
                      variant="outline-primary"
                      onClick={() => {
                        handleFetch(category);
                      }}
                    >
                      <Search />
                      {category}{" "}
                    </Button>
                  );
                })}
              </div>
              {isSuggestVisible && (
                <>
                  <hr color="secondary" />
                  <Collapse in={isSuggestOpen}>
                    <ListGroup className="border-0">
                      {suggestList.map((job) => {
                        return (
                          <ListGroup.Item
                            className="border-0 border-bottom"
                            key={job._id}
                          >
                            <h5><a href={job.url} target="blank" className=" text-decoration-none" style={{color:'rgba(0, 0, 255, 0.7)'}}>{job.title}</a></h5>
                            <p className="text-dark m-0">{job.company_name} - <small className="text-secondary">{job.job_type}&nbsp;{job.salary}</small></p>
                            <small className="text-secondary">{job.candidate_required_location}</small><br />
                            <small className="text-secondary">Candidati tramite <Linkedin color="blue"/></small>

                          </ListGroup.Item>
                        );
                      })}
                    </ListGroup>
                  </Collapse>
                </>
              )}
            </div>
          </Card>
        </Row>
        <Row className="mt-2">
          <Card>
            <h2>Risultati Ricerca</h2>
          </Card>
        </Row>
      </Container>
    </>
  );
};
export default JobsMain;
