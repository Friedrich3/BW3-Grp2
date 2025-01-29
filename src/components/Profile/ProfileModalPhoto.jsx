import { Camera, Trash } from "react-bootstrap-icons";
import { Modal, Button } from "react-bootstrap";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux"; 
import { updateProfileImage } from "../redux/actions"; 

const ProfileModalPhoto = ({ profileEdit, setProfilePictureEdit, profilo, userId }) => {
    const inputRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

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
                    Authorization: "Bearer YOUR_ACCESS_TOKEN",
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
                    src={profilo.image}
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
