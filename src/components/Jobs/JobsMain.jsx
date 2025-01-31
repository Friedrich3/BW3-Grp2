import { useEffect, useState } from "react";
import {
  Button,
  Card,
  Collapse,
  Container,
  ListGroup,
  Row,
  Spinner,
} from "react-bootstrap";
import { ArrowDown, Search, X } from "react-bootstrap-icons";
import JobsListItem from "./JobsListItem";
import { useParams } from "react-router-dom";

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
  const params = useParams();
  const [isSuggestOpen, setIsSuggestOpen] = useState(true);
  const [isSuggestVisible, setIsSuggestVisible] = useState(false);
  const [suggestList, setSuggestList] = useState([]);
  const [search, setSearch] = useState(params.search);
  const [isSearchOpen, setIsSearchOpen] = useState(true)
  const[searchList, setSearchList]= useState([])
  const [isSearchLoading, setIsSearchLoading] = useState(true);

  
  useEffect(() => {
    setSearch(params.search);
    handleFetch();
    if(params!== undefined){
        awaitFunction()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  const awaitFunction = async()=>{
        await fetchSearch()
        //console.log(searchList)
        setIsSearchLoading(false)
  }


  const handleFetch = async function (
    category = categories[Math.floor(Math.random() * categories.length)]
  ) {
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

  const fetchSearch = async function(){
    setIsSearchLoading(true)
        const urlGETsearch = `https://strive-benchmark.herokuapp.com/api/jobs?search=${search}`
        try {
            const response = await fetch(urlGETsearch,{
                method:'GET',
                headers:{
                    "Content-Type": "application/json",
                }})
                if(response.ok){
                    const data = await response.json()
                    setSearchList(data.data)
                    
                }else{
                    throw new Error('Errore GET SearchQuery')
                }
        } catch (error) {
            console.log('ERRORE' ,error)
            setIsSearchLoading(false)
        }
  } 

  return (
    <>
      <Container fluid className="mt-2 mt-lg-0">
        <Row>
          <Card>
            <div>
              <div className="d-flex justify-content-between">
                <h5 className="mt-2 ms-2">
                  Le principali offerte di lavoro per te
                </h5>
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
                      className="rounded-pill mb-1 me-1 fw-medium"
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
                        return <JobsListItem job={job} key={job._id} />;
                      })}
                    </ListGroup>
                  </Collapse>
                </>
              )}
            </div>
          </Card>
        </Row>
        <Row className="mt-2">
          {search !== undefined && (
            <Card>
                 <div className="d-flex justify-content-between">
              <h5 className="mt-2 ms-2">Risultati Ricerca</h5>
              <Button
                  variant="transparent"
                  className="border-0"
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  aria-controls="example-collapse-text"
                  aria-expanded={isSearchOpen}
                >
                  {isSearchOpen ? <X size={20} /> : <ArrowDown size={20} />}
                </Button>
                </div>
            {isSearchLoading && <Spinner variant="primary" className="text-center" />}
              {!isSearchLoading && (
                <>
                  <hr color="secondary" />
                  <Collapse in={isSearchOpen}>
                    <ListGroup className="border-0">
                    {/* TODO inserire ALERT ERRORE SE searchList.length === 0  */}
                      {searchList.map((job,index) => {
                        if(index < 10){
                            return <JobsListItem job={job} key={job._id} />;
                        }else{
                            return
                        }
                      })}

                    </ListGroup>
                  </Collapse>
                </>
              )}

            </Card>
          )}
        </Row>
      </Container>
    </>
  );
};
export default JobsMain;
