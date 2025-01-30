import { useEffect, useState } from "react";
import {
  Button,
  Card,
  Collapse,
  Container,
  ListGroup,
  Row,
} from "react-bootstrap";
import { ArrowDown, Search, X } from "react-bootstrap-icons";
import JobsListItem from "./JobsListItem";

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

  const handleFetch = async function (category = categories[Math.floor(Math.random()*categories.length)]) {
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
                <h5 className="mt-2 ms-2">Le principali offerte di lavoro per te</h5>
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
                          <JobsListItem job={job} key={job._id}/>
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
