import React from 'react';
import AdvenImg from '../../Img/spalni2.png'
import './AutumnAdversiting.css'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const AutumnAdversiting = () => {
    const {t, i18n} = useTranslation()
    
    return (
        <div className='advertising autumn'>
            <div className="advertising-left">
                <h1 className="adven-left-title">100%</h1>
                <p className="adven-desc">{t('advenTitle')}</p>
            </div>

            <img className='adven-img' src={AdvenImg} alt="image" />

            <div className="advertising-right">
                <h1 className="adven-right-title">{t('advenTitle2')}</h1>
                <p className="adven-desc">{t('advenTitle3')}</p>
                <Link to={'/collection'} className="btn btn-light p-2 pe-5 ps-5 rounded-pill color-primary collec-btn">{t('colletionBtn')}</Link >
            </div>
        </div>
    );
}

export default AutumnAdversiting;
