import React from 'react';
import AboutImg from '../../Img/about.png'
import './About.css'
import { useTranslation } from 'react-i18next';

const About = () => {
    const {t, i18n} = useTranslation()
    return (
        <div className='about'>
            <div className="about-left">
                <p className="about-desc">{t('aboutDesc')}</p>
                <p className="about-desc">{t('aboutDesc2')}</p>
                <p className="about-desc">{t('aboutDesc3')}</p>
                <p className="about-desc">{t('aboutDesc4')}</p>
                <p className="about-desc">{t('aboutDesc5')}</p>
                <p className="about-desc">{t('aboutDesc6')}</p>
                <p className="about-desc">{t('aboutDesc7')}</p>
                <p className="about-desc">{t('aboutDesc8')}</p>
                <p className="about-desc">{t('aboutDesc9')}</p>
                <p className="about-desc">{t('aboutDesc10')}</p>
                <p className="about-desc">{t('aboutDesc11')}</p>
                
            </div>

            <img src={AboutImg} alt="img" className="about-img" />
        </div>
    );
}

export default About;
