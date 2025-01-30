import { Camera, Trash } from "react-bootstrap-icons";
import { Modal, Button } from "react-bootstrap";
import { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

const ProfileModalPhoto = ({ 
    profileEdit, 
    setProfilePictureEdit, 
    profilo, 
    userId 
}) => {
    const inputRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    // Debugging: Verifica i dati ricevuti
    useEffect(() => {
        console.log("Dati del profilo:", profilo);
    }, [profilo]);

    // Controllo di sicurezza per la prop setProfilePictureEdit
    if (typeof setProfilePictureEdit !== "function") {
        console.error("setProfilePictureEdit non è una funzione!");
        return null;
    }

    const handleClose = () => setProfilePictureEdit(false);

    const handleFileUpload = () => {
        inputRef.current?.click();
    };

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (!file || !file.type.startsWith("image/")) return;

        const formData = new FormData();
        formData.set("profile", file);
        formData.append("profile", file);
        console.log(Object.fromEntries(formData))

        setLoading(true);
        try {
            const response = await fetch(
                `https://striveschool-api.herokuapp.com/api/profile/${userId}/picture`,
                {
                    method: "PUT",
                    body: formData,
                    headers: {
                        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk3NDU0YTE2ZjYzNTAwMTVmZWNiN2MiLCJpYXQiOjE3Mzc5NjY5MjIsImV4cCI6MTczOTE3NjUyMn0.APtaAFtP0PypOo5hfd4isz08vj_exXfml5SDPxQvOZ4",
                    },
                }
            );

            if (!response.ok) throw new Error("Upload fallito");
            
            const data = await response.json();
            dispatch(updateProfileImage(data.image)); // Aggiorna Redux

        } catch (error) {
            console.error("Errore:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Modal show={profileEdit} onHide={handleClose} className="text-white">
            <Modal.Header closeButton className="bg-dark border-secondary">
                <Modal.Title>Foto Profilo</Modal.Title>
            </Modal.Header>
            <Modal.Body className="bg-dark border-secondary text-center">
                <img
                    src={profilo?.image || "https://via.placeholder.com/150"}
                    alt="Profile"
                    className="rounded-circle border border-3 border-white"
                    style={{ width: "150px", cursor: "pointer" }}
                    onClick={handleFileUpload}
                />
            </Modal.Body>
            <Modal.Footer className="bg-dark border-secondary">
                <Button 
                    variant="dark" 
                    onClick={handleFileUpload} 
                    disabled={loading}
                >
                    <Camera /> {loading ? "Caricamento..." : "Modifica"}
                </Button>
                <input
                    type="file"
                    ref={inputRef}
                    onChange={handleFileChange}
                    accept="image/*"
                    hidden
                />
                <Button variant="dark" disabled={loading}>
                    <Trash /> Elimina
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

// Validazione delle props
ProfileModalPhoto.propTypes = {
    profileEdit: PropTypes.bool.isRequired,
    setProfilePictureEdit: PropTypes.func.isRequired, // Deve essere una funzione
    profilo: PropTypes.object.isRequired,
    userId: PropTypes.string.isRequired,
};

export default ProfileModalPhoto;