import { useState } from "react";
import { Button, Dropdown, Form, NavLink } from "react-bootstrap";
import { GearWide, PencilSquare, Search, Wechat } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

// import Image from "react-bootstrap";

const MessaggioLinkedin = function () {
    const profilo = useSelector((state) => {
        return state.profile.data;
      });
    const [isOpen, setIsOpen] = useState(false);

    const Tendina = () => {
        setIsOpen(!isOpen);
    };
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
        }
    };
    return (
        <>
            <div className="btnContenitoreTendina bg-white">
                <Button onClick={Tendina} className="text-black fw-bold pt-2 btnTendina">
                <img src={profilo.image} alt="" className="me-3 rounded-circle" style={{width:'30px'}} />
                    {/* < BiUserCircle style={{ fontSize: '35px' }} className="me-4 text-primary" /> */}
                    {isOpen ? 'Messaggistica ❌' : 'Messaggistica'} <Wechat className="mx-4" /><PencilSquare className="m-2" />
                </Button>

                {isOpen && (
                    <Form className="ContenutoForm">
                        <Form.Group className="mt-2">
                            <div className="input-group">
                                <span className="input-group-text bgForm border-0">
                                    <Search />
                                </span>
                                <Form.Control
                                    type="text"
                                    placeholder="Cerca messaggi"
                                    className="border-0 bgForm"
                                    onKeyDown={handleKeyDown}
                                />
                                <span className="input-group-text border-0 bgForm">
                                    <Dropdown>
                                        <Dropdown.Toggle as={NavLink}>
                                            <GearWide />
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item className="">Da leggere</Dropdown.Item>
                                            <Dropdown.Item className="">Contrassegnati con una stella</Dropdown.Item>
                                            <Dropdown.Item className="">Messaggi In Mail</Dropdown.Item>
                                            <Dropdown.Item className="">I miei collegamenti</Dropdown.Item>
                                            <Dropdown.Item className="">Archiviati</Dropdown.Item>
                                            <Dropdown.Item className="">Posta indesiderata</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </span>
                            </div>
                        </Form.Group>
                        <div className="text-center contenutoForm">
                            <img src={"https://static.licdn.com/aero-v1/sc/h/eeol4w9o9de2j4gq699mzx79d"} alt="..." className="mt-5" />
                            <p className="text-secondary fw-bold fs-4 lh-1 ">Ancora nessun <br />messaggio</p>
                            <p >Entra in contatto e dai il via a una conversazione per far decollare la tua carriera</p>
                            <Button className="text-dark fw-bold border-dark btnForm">Invia un messaggio</Button>
                        </div>

                    </Form>
                )}
            </div >

        </>
    )
}
export default MessaggioLinkedin