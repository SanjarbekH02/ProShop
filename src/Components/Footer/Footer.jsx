import React from 'react';
import './Footer.css'
import LogoImg from '../../Img/logo.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div id='footer' className='footer'>
            <div className="logo-block">
                <a href="#">
                    <img src={LogoImg} alt="" className="logo-img" />
                </a>
                <p className="footer-desc">“Bukhara Natural Product” koʻp yillardan buyon butun dunyoda foydalanish uchun paxta matolari ishlab chiqaradigan kompaniya hisoblanadi.</p>
            </div>
            <div className="footer-nav">
                <h6 className="nav-title">Menyu</h6>
                <ul className="footer-list">
                    <li className="footer-item">
                        <Link  to={'/'} clLinkssName="footer-link">Uy</Link>
                    </li>
                    <li className="footer-item">
                        <Link to={'/collection'} className="footer-link">To'plam</Link>
                    </li>
                    <li className="footer-item">
                        <a href="#footer" className="footer-link">Biz haqimizda</a>
                    </li>
                    <li className="footer-item">
                        <a href="#footer" className="footer-link">Kontaklar</a>
                    </li>
                </ul>
            </div>

            <div className="contacts">
                <h6 className="nav-title">Kontaklar</h6>
                <a href="mailto: Bnpuz@bk.ru" className="footer-link">Buxoro, st. Alpomish 80. Bnpuz@bk.ru</a>
                <a href="mailto: bnp_fabrikinfo@bnpfabric.com" className="footer-link">bnp_fabrik info@bnpfabric.com</a>
                <a href="tel:++998933837585" className="footer-link">+998 93 383 75 85</a>
                <a href="tel:+998939607800" className="footer-link">+998 93 960 78 00</a>
            </div>

            <div className="footer-submit">
                <h6 className="nav-title">Elektron pochtamizga obuna bo'ling</h6>
                <div className="input-group pt-3 pb-3">
                    <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                    <button type="button" className="btn bg-danger text-light footer-btn" data-mdb-ripple-init>Obuna bo'ling</button>
                </div >
                <p className="footer-link">Kamida bitta roʻyxatni tanlang.</p>
            </div>
        </div>
    );
}

export default Footer;
