import React from 'react';
import './News.css'
import Watch from '../../Img/news1.png'
import Macbook from '../../Img/news2.png'
import Ach3D from '../../Img/news3.png'
import { useTranslation } from 'react-i18next';

const News = () => {

    const {t, i18n} = useTranslation()
    return (
        <div className='news'>
            <h1 className="products-title">{t('news')}</h1>
            <p className="products-desc">{t('product')}</p>
            <div className="news-block">
                <a href="#" className="news-card">
                    <img className='news-img' src={Watch} alt="img" />
                    <p className="news-date">{t('newsData')}</p>
                    <h4 className="news-title">{t('newsTitle')}</h4>
                    <p className="news-desc">{t('newsDesc')}</p>
                </a>

                <a href="#" className="news-card">
                    <img className='news-img' src={Macbook} alt="img" />
                    <p className="news-date">{t('newsData')}</p>
                    <h4 className="news-title">{t('newsTitle')}</h4>
                    <p className="news-desc">{t('newsDesc')}</p>
                </a>

                <a href="#" className="news-card">
                    <img className='news-img' src={Ach3D} alt="img" />
                    <p className="news-date">{t('newsData')}</p>
                    <h4 className="news-title">{t('newsTitle')}</h4>
                    <p className="news-desc">{t('newsDesc')}</p>
                </a>
            </div>
        </div>
    );
}

export default News;
