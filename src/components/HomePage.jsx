import { ArrowBarRight } from 'react-bootstrap-icons';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

const HomePage = () => {

    return (
        <div className='bg-light'>
            <h5>I giochi di oggi</h5>
            <Link to="https://www.linkedin.com/games/tango/" className='text-black text-decoration-none'>
                <div className="content">
                    <Image src='https://static.licdn.com/aero-v1/sc/h/gqavqd9gk6ja1s27lr1p2zz2' />
                    <div className="text-container">
                        <p className='fw-bold fs-5 pt-3'>Tango</p>
                        <p>Incorona ogni regione <ArrowBarRight className='ArrowBarRight' /></p>
                    </div>
                </div>
            </Link>
            <Link to="https://www.linkedin.com/games/tango/" className="text-black text-decoration-none">
                <div className="content">
                    <Image src="https://static.licdn.com/aero-v1/sc/h/6uvsjtqx2j32uh1a803qygh5y" />
                    <div className="text-container">
                        <p className='fw-bold fs-5 pt-3'>Queens</p>
                        <p>Incorona ogni regione <ArrowBarRight className='ArrowBarRight' /></p>

                    </div>
                </div>
            </Link>

            <button className='rounded borde-1 border-secondary p-3 bg-light BtnSeggerimenti'>
                <button className='rounded p-1'>SUGGERIMENTI</button>
                <p className='fs-4'>
                    Prova Linkedin sull&apos;app <br />per Windows
                </p>

            </button>

        </div>
    );
};

export default HomePage;