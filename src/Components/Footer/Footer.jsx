import React, { useState } from 'react';
import './Footer.css'
import LogoImg from '../../Img/logo.png'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import axios from 'axios'
import  Modal  from '../../Components/Modal/Modal';

const Footer = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        

        const botToken = "7273767488:AAGBFGEZCkTVcpaT0VEVDNYEkbvB5uHMPSY";
        const chatId = 954540465;        

        try {
            // Telegram API-ga so'rov yuborish
            await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                chat_id: chatId,
                text: message,
            });

            setModalOpen(true)
            setMessage('');
        } catch (error) {
            alert('Xatolik yuz berdi!');
        } finally {
            setIsSubmitting(false);
        }
    };


    const { t, i18n } = useTranslation()
    return (
        <div id='footer' className='footer'>
            <div className="logo-block">
                <a href="#">
                    <img src={LogoImg} alt="" className="logo-img" />
                </a>
                <p className="footer-desc">{t('footerDesc')}</p>
            </div>
            <div className="footer-nav">
                <h6 className="nav-title">{t('menu')}</h6>
                <ul className="footer-list">
                    <li className="footer-item">
                        <Link to={'/'} className="footer-link">{t('home')}</Link>
                    </li>
                    <li className="footer-item">
                        <Link to={'/collection'} className="footer-link">{t('collection')}</Link>
                    </li>
                    <li className="footer-item">
                        <Link to={'/about'} className="footer-link">{t('about')}</Link>
                    </li>
                    <li className="footer-item">
                        <a href="#footer" className="footer-link">{t('contacts')}</a>
                    </li>
                </ul>
            </div>

            <div className="contacts">
                <h6 className="nav-title">{t('kontacts')}</h6>
                <a href="mailto: Bnpuz@bk.ru" className="footer-link">Buxoro, st. Alpomish 80. Bnpuz@bk.ru</a>
                <a href="mailto: bnp_fabrikinfo@bnpfabric.com" className="footer-link">bnp_fabrik info@bnpfabric.com</a>
                <a href="tel:++998933837585" className="footer-link">+998 93 383 75 85</a>
                <a href="tel:+998939607800" className="footer-link">+998 93 960 78 00</a>
            </div>

            <div className="footer-submit">
                <h6 className="nav-title">{t('email')}</h6>
                <form onSubmit={handleSubmit} className="input-group pt-3 pb-3">
                    <input value={message}  onChange={(e) => setMessage(e.target.value)} required type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                    <button type="submit" className="btn bg-danger text-light footer-btn" data-mdb-ripple-init>{t('buttonText')}</button>
                </form >
                <p className="footer-link">{t('emailReg')}</p>
            </div>

            <Modal openModal={modalOpen} setOpenModal={setModalOpen}/>
        </div>
    );
}

export default Footer;
