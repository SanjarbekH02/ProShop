import React from 'react';
import './SummerAdversiting.css'
import AdvenImg from '../../Img/spalni3.png'
import { useTranslation } from 'react-i18next';

const SummerAdversiting = () => {
    const {t, i18n} = useTranslation()

    return (
        <div className='advertising summer'>
            <div className="advertising-left">
                <h1 className="adven-left-title">100%</h1>
                <p className="adven-desc">{t('advenTitle')}</p>
            </div>

            <img className='adven-img' src={AdvenImg} alt="image" />

            <div className="advertising-right">
                <h1 className="adven-right-title">{t('advenTitle2')}</h1>
                <p className="adven-desc">{t('advenTitle3')}</p>
                <button className="btn btn-light p-2 pe-5 ps-5 rounded-pill color-primary">{t('colletionBtn')}</button>
            </div>
        </div>
    );
}

export default SummerAdversiting;
