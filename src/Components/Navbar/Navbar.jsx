import React from 'react';
import LogoImg from '../../Img/logo.png'
import { Link } from 'react-router-dom';


const Navbar = () => {



    return (
        <nav id='navbar' className="navbar navbar-expand-lg navbar-light pt-4 pb-4">
            <div className="container-fluid">
                <a  className="navbar-brand" href="/">
                    <img src={LogoImg} alt='logo' style={{ width: '130px' }} />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item md-5 me-4">
                            <Link  to={'/'} className="nav-link active" aria-current="page">Uy</Link>
                        </li>
                        <li className="nav-item me-4">
                            <Link to={'/collection'} className="nav-link">To'plam</Link>
                        </li>
                        <li className="nav-item me-4">
                            <a href='#footer' className="nav-link">Biz haqimizda</a>
                        </li>

                        <li className="nav-item">
                            <a href='#footer' className="nav-link">Kontaklar</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}
export default Navbar;
