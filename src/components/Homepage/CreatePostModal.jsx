/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { getPostAction, token } from "../../redux/action";
import { useDispatch } from "react-redux";

const CreatePostModal = function ({ profilo, setCreatePost, preSelectedFile }) {
  const handleClose = () => setCreatePost(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [postText, setPostText] = useState("");
  const [selectedFile, setSelectedFile] = useState(preSelectedFile || null);
  const [preview, setPreview] = useState(
    preSelectedFile ? URL.createObjectURL(preSelectedFile) : ""
  );
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("profilo in CreatePostModal:", profilo);
  }, [profilo]);

  useEffect(() => {
    if (preSelectedFile) {
      setSelectedFile(preSelectedFile);
      setPreview(URL.createObjectURL(preSelectedFile));
      setIsDisabled(false);
    }
  }, [preSelectedFile]);

  const changeHandler = (e) => {
    setPostText(e.target.value);
    setIsDisabled(e.target.value.trim() === "" && !selectedFile);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
      setIsDisabled(false);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    setPreview("");
    setIsDisabled(postText.trim() === "");
  };

  const handlePost = async () => {
    const urlPOSTpost = "https://striveschool-api.herokuapp.com/api/posts/";
    const formData = new FormData();
    formData.append("text", postText);
    if (selectedFile) {
      formData.append("media", selectedFile);
    }

    try {
      const response = await fetch(urlPOSTpost, {
        method: "POST",
        headers: {
          Authorization: token,
        },
        body: formData,
        mode: "cors",
      });

      if (response.ok) {
        console.log("✅ Post uploaded successfully!");
        handleClose();
        dispatch(getPostAction());
      } else {
        const errorMessage = await response.text();
        console.error("❌ Upload failed:", errorMessage);
      }
    } catch (error) {
      console.error("❌ Error uploading post:", error);
    }
  };

  return (
    <Modal show={true} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Scrivi il tuo Post</Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-0">
        <Form>
          {profilo && profilo.username ? (
            <div className="d-flex align-items-center mb-3">
              <img
                src={profilo.image || "https://via.placeholder.com/50"}
                alt="Profile"
                className="rounded-circle"
                style={{ width: "50px", height: "50px", marginRight: "10px" }}
              />
              <span className="fw-bold">{profilo.username}</span>
            </div>
          ) : (
            <p className="text-warning">🔄 Loading profile...</p> // ✅ Prevents crash if profile is missing
          )}

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
              onChange={changeHandler}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Upload Media</Form.Label>
            <Form.Control
              type="file"
              accept="image/*,video/*"
              onChange={handleFileChange}
            />
          </Form.Group>

          {preview && (
            <div className="text-center">
              {selectedFile?.type?.startsWith("image") ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="img-fluid rounded"
                  style={{ maxHeight: "200px" }}
                />
              ) : (
                <video
                  src={preview}
                  controls
                  className="img-fluid rounded"
                  style={{ maxHeight: "200px" }}
                />
              )}
              <Button
                variant="danger"
                size="sm"
                className="mt-2"
                onClick={removeFile}
              >
                Remove
              </Button>
            </div>
          )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant={isDisabled ? "outline-secondary" : "primary"}
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
