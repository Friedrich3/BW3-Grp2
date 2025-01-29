import { Camera, Trash } from "react-bootstrap-icons";
import { Modal, Button } from "react-bootstrap";
import { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux"; 
import { updateProfileImage } from "../../redux/action";

const ProfileModalPhoto = ({ profileEdit, setProfilePictureEdit, profilo, userId }) => {
    const inputRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    // Debugging: Controlliamo se `profilo` è undefined
    useEffect(() => {
        console.log("Profilo ricevuto:", profilo);
    }, [profilo]);
    
    if (typeof setProfilePictureEdit !== "function") {
        console.error("Errore: setProfilePictureEdit non è una funzione!", setProfilePictureEdit);
        return null; // Evita il rendering se c'è un errore
    }
    const handleClose = () => setProfilePictureEdit(false);

    const handleFileUpload = () => {
        if (inputRef.current) {
            inputRef.current.click();
        }
    };

    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const formData = new FormData();
        formData.append("profile", file);

        setLoading(true);
        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/picture`, {
                method: "PUT",
                body: formData,
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk3NDU0YTE2ZjYzNTAwMTVmZWNiN2MiLCJpYXQiOjE3Mzc5NjY5MjIsImV4cCI6MTczOTE3NjUyMn0.APtaAFtP0PypOo5hfd4isz08vj_exXfml5SDPxQvOZ4",
                },
            });

            if (!response.ok) {
                throw new Error("Errore nel caricamento dell'immagine");
            }

            const data = await response.json();
            console.log("Immagine aggiornata:", data);

            dispatch(updateProfileImage(data.image));
        } catch (error) {
            console.error("Errore:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Modal show={profileEdit} onHide={handleClose} animation={false} className="text-white">
            <Modal.Header closeButton className="bg-dark border-secondary">
                <Modal.Title>Foto Profilo</Modal.Title>
            </Modal.Header>
            <Modal.Body className="bg-dark border-secondary d-flex justify-content-center">
                <img
                    src={profilo?.image || "https://via.placeholder.com/150"} //
                    style={{ width: "150px", cursor: "pointer" }}
                    className="rounded-circle border border-3 border-white"
                    alt="Profile"
                    onClick={handleFileUpload}
                />
            </Modal.Body>
            <Modal.Footer className="bg-dark border-secondary justify-content-between">
                <Button variant="dark" onClick={handleFileUpload} disabled={loading}>
                    {loading ? "Caricamento..." : <><Camera /><br />Modifica</>}
                </Button>

                {/* Input file nascosto */}
                <input 
                    type="file" 
                    ref={inputRef} 
                    style={{ display: "none" }} 
                    onChange={handleFileChange} 
                />

                <Button variant="dark" disabled={loading}>
                    <Trash />
                    <br />
                    Elimina
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ProfileModalPhoto;
