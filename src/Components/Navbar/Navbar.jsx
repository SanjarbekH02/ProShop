import React from 'react';
import { useTranslation } from 'react-i18next';
import LogoImg from '../../Img/logo.png'
import { Link } from 'react-router-dom';
import './Navbar.css'


const Navbar = () => {
    const { t, i18n } = useTranslation()
    const laungages = localStorage.getItem('i18nextLng')


    const changeHandle = (event) => {
        const selectedLaungage = event.target.value;
        i18n.changeLanguage(selectedLaungage);
    }

    return (
        <nav id='navbar' className="navbar navbar-expand-lg navbar-light pt-4 pb-4">
            <div className="container-fluid">
                <a className="navbar-brand me-5" href="/">
                    <img src={LogoImg} alt='logo' style={{ width: '130px' }} />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item md-5 me-4">
                            <Link to={'/'} className="nav-link active" aria-current="page">{t('home')}</Link>
                        </li>
                        <li className="nav-item me-4">
                            <Link to={'/collection'} className="nav-link">{t('collection')}</Link>
                        </li>
                        <li className="nav-item me-4">
                            <Link to={'/about'} className="nav-link">{t('about')}</Link>
                        </li>

                        <li className="nav-item">
                            <a href='#footer' className="nav-link">{t('contacts')}</a>
                        </li>
                    </ul>
                    <select className='nav-select' onChange={changeHandle} value={laungages}>
                        <option value="uz" className="nav-option">Uzbek</option>
                        <option value="ru" className="nav-option">Русский</option>
                        <option value="en" className="nav-option">English</option>
                    </select>
                </div>
            </div>

        </nav>

    );
}
export default Navbar;
