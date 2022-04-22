import logo from './assets/logo.png';
import { Link } from 'react-router-dom';
import './css/styles.css';
import { FaBars } from 'react-icons/fa';
import { Helmet } from 'react-helmet';


function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
                <div className="container px-4 px-lg-5">
                    <a className="navbar-brand" href="/"><img src={logo} style={{ height: 50 }} alt="logo" />
                        hoose Cebu</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
                        aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <FaBars />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto py-4 py-lg-0">
                            <li className="nav-item"><Link to="/" className="nav-link px-lg-3 py-3 py-lg-4">Home</Link></li>
                            <li className="nav-item"><Link to="/about" className="nav-link px-lg-3 py-3 py-lg-4">About</Link></li>
                            <li className="nav-item"><Link to="/contact" className="nav-link px-lg-3 py-3 py-lg-4">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Helmet>
                <script src="./js/scripts.js" type='text/javascript' />
            </Helmet>

        </>
    );
}


export default NavBar;