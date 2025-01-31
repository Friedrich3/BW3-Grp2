import { useState, useRef } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import CreatePostModal from "./CreatePostModal";
import { CalendarPlus, Image, Newspaper } from "react-bootstrap-icons";

const HomeNewPost = function () {
  const profilo = useSelector((state) => state.profile?.data || null);
  const [createPost, setCreatePost] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleMediaClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setCreatePost(true);
    }
  };

  if (!profilo) {
    return <p>Loading profile...</p>;
  }

  return (
    <>
      <Card>
        <Card.Body className="container-fluid">
          <Row>
            <Col xs={2} className="text-center">
              <img
                src={profilo?.image || "https://via.placeholder.com/50"} // Fallback image
                alt="Profile"
                style={{ width: "50px" }}
                className="rounded-circle"
              />
            </Col>
            <Col xs={10}>
              <Button
                variant="transparent"
                className="rounded-pill w-100 h-100 homepage-button border border-2 border-secondary text-start fw-medium text-secondary"
                onClick={() => setCreatePost(true)}
              >
                Crea un Post
              </Button>
            </Col>
          </Row>
          <hr color="secondary" />
          <div className="d-flex justify-content-around">
            <Button
              variant="transparent"
              className="homepage-button rounded-0 px-0 py-2 fw-medium"
              onClick={handleMediaClick}
            >
              <Image color="#378FE9" /> Contenuti Multimediali
            </Button>
            <Button
              variant="transparent"
              className="homepage-button rounded-0 px-0 py-2 fw-medium"
            >
              <CalendarPlus color="#C37D16" /> Evento
            </Button>
            <Button
              variant="transparent"
              className="homepage-button rounded-0 px-0 py-2 fw-medium"
            >
              <Newspaper color="#E06847" /> Scrivi un articolo
            </Button>
          </div>
        </Card.Body>
      </Card>

      <input
        type="file"
        ref={fileInputRef}
        accept="image/*,video/*"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />

      {createPost && (
        <CreatePostModal
          profilo={profilo}
          setCreatePost={setCreatePost}
          preSelectedFile={selectedFile}
        />
      )}
    </>
  );
};

export default HomeNewPost;
