import React from 'react';
import { useTranslation } from 'react-i18next';
import './Home.css'
import HomeImg from '../../Img/home.png'
import Curier from '../../Img/kurier.svg'
import Guarantee from '../../Img/kafolat.svg'
import Faq from '../../Img/naush.svg'
import Payment from '../../Img/tolov.svg'
import Advertising from '../../Components/Advertising/Advertising';
import Products from '../../Components/Products/Products';
import AutumnAdversiting from '../../Components/AutumnAdversiting/AutumnAdversiting';
import AutumnCollection from '../../Components/AutumnCollection/AutumnCollection';
import SummerAdversiting from '../../Components/SummerAdversiting/SummerAdversiting';
import SummerCollection from '../../Components/SummerCollection/SummerCollection';

const Home = ({onItemSelect}) => {

    const {t} = useTranslation()

    return (
        <div>
            <div className="home">
                <div className="home-left">
                    <img src={HomeImg} alt="home img" className="home-img" />
                </div>
                <div className="home-right">
                    <div className="home-right-block">
                        <h4 className="home-city">{t('homeTitle')}</h4>
                        <h3 className="home-title">{t('homeTitle2')}</h3>
                        <h1 className="home-produc-title">{t('homeTitle3')}</h1>
                    </div>
                </div>
            </div>

            <div className="info">
                <div className="info-card">
                    <img src={Curier} alt="kurier rasmi" className="curier" />
                    <div className="info-card-block">
                        <h5 className="info-title">{t('infoTitle')}</h5>
                        <p className="info-desc">{t('infoDesc')}</p>
                    </div>
                </div>

                <div className="info-card">
                    <img src={Guarantee} alt="kurier rasmi" className="curier" />
                    <div className="info-card-block">
                        <h5 className="info-title">{t('infoTitle2')}</h5>
                        <p className="info-desc">{t('infoDesc2')}</p>
                    </div>
                </div>

                <div className="info-card">
                    <img src={Faq} alt="kurier rasmi" className="curier" />
                    <div className="info-card-block">
                        <h5 className="info-title">{t('infoTitle3')}</h5>
                        <p className="info-desc">{t('infoDesc3')}</p>
                    </div>
                </div>

                <div className="info-card">
                    <img src={Payment} alt="kurier rasmi" className="curier" />
                    <div className="info-card-block">
                        <h5 className="info-title">{t('infoTitle4')}</h5>
                        <p className="info-desc">{t('infoDesc4')}</p>
                    </div>
                </div>
            </div>
            <Advertising />
            <Products onItemSelect={onItemSelect} />
            <AutumnAdversiting />
            <AutumnCollection onItemSelect={onItemSelect}  />
            <SummerAdversiting />
            <SummerCollection onItemSelect={onItemSelect} />
        </div>
    );
}

export default Home;
